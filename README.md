Name of your project : React ts - add to card functionality
A little description:  very hard project :)

Technology that you use : 

React — Building interactive user interfaces

TypeScript — Adding type safety to JavaScript

CSS3 — Styling the application and technology cards

JSON — Storing technology information

React Toastify — Displaying toast notifications

Vite — Development server and build tool


3 features about your project: 1. tostify, add to card, remove cart


-----------------------


⚛️ React Questions & Answers

1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. 

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

3. What does the useState hook do, and where did you use it in this project?

The useState hook lets a component store and update data. I used it to manage the technologies added to my personal stack and update the UI when items are added or removed.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs side effects in a component, such as fetching data from an external source. It can be used to load the technology JSON data when the component first renders. In this project, data loading needs to happen without repeatedly fetching the same data on every render.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It allows React to track which items have changed, been added, or been removed and update the UI correctly.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition. In this project, I can show an empty stack message when no technologies have been added and display the stack items when the stack contains technologies.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. To let a child communicate back, the parent can pass a callback function as a prop. The child calls that function when an event happens, such as clicking the Add button.
