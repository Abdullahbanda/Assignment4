const jobs = [
  { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform applications using React Native.", status: "all" },
  { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$90,000 - $120,000", description: "Create modern web experiences for high-profile clients.", status: "all" },
  { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", description: "Transform complex data into compelling visuals.", status: "all" },
  { id: 4, company: "CloudNet", position: "Cloud Engineer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $180,000", description: "Deploy scalable cloud infrastructure systems.", status: "all" },
  { id: 5, company: "AI Labs", position: "Machine Learning Engineer", location: "New York, NY", type: "Full-time", salary: "$150,000 - $200,000", description: "Develop advanced AI systems.", status: "all" },
  { id: 6, company: "FinTech Pro", position: "Backend Developer", location: "Chicago, IL", type: "Full-time", salary: "$120,000 - $150,000", description: "Build secure financial APIs.", status: "all" },
  { id: 7, company: "HealthTech", position: "Frontend Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $140,000", description: "Develop responsive healthcare platforms.", status: "all" },
  { id: 8, company: "EduWorld", position: "Full Stack Developer", location: "Remote", type: "Contract", salary: "$100,000 - $130,000", description: "Build education management systems.", status: "all" }
];

let currentTab = "all";
const container = document.getElementById("jobs-container");

function renderJobs() {
  container.innerHTML = "";

  const total = jobs.filter(j => j.status !== "deleted").length;

  const filtered = jobs.filter(job => {
    if (currentTab === "all") return job.status !== "deleted";
    return job.status === currentTab;
  });

  if (filtered.length === 0) {
    document.getElementById("empty-message").classList.remove("hidden");
  } else {
    document.getElementById("empty-message").classList.add("hidden");
  }

  filtered.forEach(job => {

    let badgeClass = "not-applied";
    let badgeText = "NOT APPLIED";

    if (job.status === "interview") {
      badgeClass = "interview-badge";
      badgeText = "INTERVIEW";
    }

    if (job.status === "rejected") {
      badgeClass = "rejected-badge";
      badgeText = "REJECTED";
    }

    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <h4>${job.company}</h4>
      <div class="position">${job.position}</div>
      <div class="info">${job.location} • ${job.type} • ${job.salary}</div>
      <span class="badge ${badgeClass}">${badgeText}</span>
      <p class="info">${job.description}</p>

      <div class="buttons">
        <button class="interview-btn" onclick="updateStatus(${job.id}, 'interview')">Interview</button>
        <button class="reject-btn" onclick="updateStatus(${job.id}, 'rejected')">Rejected</button>
        <button class="delete-btn" onclick="deleteJob(${job.id})">Delete</button>
      </div>
    `;

    container.appendChild(card);
  });

  updateCounts();
}

function updateStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  job.status = job.status === status ? "all" : status;
  renderJobs();
}

function deleteJob(id) {
  const job = jobs.find(j => j.id === id);
  job.status = "deleted";
  renderJobs();
}

function updateCounts() {
  const total = jobs.filter(j => j.status !== "deleted").length;
  const interview = jobs.filter(j => j.status === "interview").length;
  const rejected = jobs.filter(j => j.status === "rejected").length;

  document.getElementById("total-count").innerText = total;
  document.getElementById("interview-count").innerText = interview;
  document.getElementById("rejected-count").innerText = rejected;

  document.getElementById("section-count").innerText = `${total} jobs`;
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    this.classList.add("active");
    currentTab = this.dataset.tab;
    renderJobs();
  });
});

renderJobs();