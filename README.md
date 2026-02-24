Answers to Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById select one element using id. getElementsByClassName select multiple element with the same class.
querySelector selects the first matching CSS selector. querySelectorAll selects all matching elements and returns a NodeList.
3. How do you create and insert a new element into the DOM?
const div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);
5. What is Event Bubbling? And how does it work?
Event Bubbling means when an event happens on a child element, it moves upward to its parent elements
7. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation means adding an event listener to a parent element and its useful when many dynamic elements exist.
9. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() Stops default browser behavior.
stopPropagation() Stops event bubbling to parent elements.
