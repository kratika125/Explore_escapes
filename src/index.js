import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';//This line imports the App component from the App module/file. The App component is usually the root component of your application where the main structure and logic of the app reside.
const root=ReactDOM.createRoot(document.getElementById('root')); 
//creates a root container for the React application. This is where the entire React component tree will be rendered.
root.render(<App />) //This line renders the App component inside the root container. The render method is called on the root container, and the App component (along with its child components) is displayed in the browser.
//RENDER-In React, the render method is used to display React components into the DOM. Specifically, 
//it converts the React component tree into actual HTML elements that can be rendered by the browser.



