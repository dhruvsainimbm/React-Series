React + Vite

What is React ?
->JavaScript Library
->Develpped by facebook 2011
->Used to build Single page application

Working of DOM -
->Document object model
->in the form of tree
->js is used to manipulate it

Problems with the JavaScript
->react is simple
->js is error prone ,complicated and hard to maintain

Working with React -
->no need to query and update dom
->react creates simple reusable components
->react will take care of creating and updating dom elements
->it saves lot of time

JS VS REACT
->js is imparitive:define steps to reach desired state
->react is declarative :only define states react will take carre of steps

What are Components?
->they are reusable , modular parts of the web page used for better optimality

What is IDE for react?
->IDE stands for Integrated Development Environment
->Designed to improve developer efficiency

step:1
->Install Latest Node.js in local setup

->Project is setup through Vite+React
// npm create vite@latest <file_name>

->Install npm modules which are required
// npm i

->Run through
// npm run dev

Project Structure -
->node_modules : contain node modules
->public : contain static files
->src : main folder of the project - components : reusable parts - asseets : images / fonts - style : css and stylesheets
->package.json : manifest file contain info about project
->vite.config.js : contain vite configuration
->gitignore : contain file /folder name which need not to be pushed on the git.
->index.html :main html file of the page

File Extentions -
->.js - stands for javascript files
-contain regular js - conatain general logic
->.jsx - stands for javascript xml - js + xml - use in making ui

Functional v/s Class based Components
->function based

- initially stateless
- can use hooks
- simpler and concise
- more popular
  ->class based
- stateful
- lifecycle
- verbose
- not prefered

What is jsx ?
->jsx determine how the UI will look wherever the component is used
->not html
->jsx gets converted to regular javascript

Exporting of the Component
->enables the use of a component in other parts
->default export allows exporting a single component as the default from a module
->named export - allow exporting multiple items from a module
-> to use exported component we must use import to import the component in that page

Other imp points
->Naming must be Started from capital letter only
->html can be written in the from of xml
->css in react can be written in the seperate file and the imported

Dynamic Components
->dynamic content - jsx allows the creation of dynamic and interactive UI Components
->javascript expression using {} we can embed any js expression directly within jsx.
