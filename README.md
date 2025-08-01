  <h1>React + Vite</h1>

  <h3>What is React?</h3>
  <ul>
    <li>JavaScript Library</li>
    <li>Developed by Facebook in 2011</li>
    <li>Used to build Single Page Applications (SPA)</li>
  </ul>

  <h3>Working of DOM</h3>
  <ul>
    <li>DOM stands for Document Object Model</li>
    <li>It is structured in the form of a tree</li>
    <li>JavaScript is used to manipulate the DOM</li>
  </ul>

  <h3>Problems with JavaScript</h3>
  <ul>
    <li>JavaScript can be error-prone, complicated, and hard to maintain</li>
    <li>React simplifies development</li>
  </ul>

  <h3>Working with React</h3>
  <ul>
    <li>No need to manually query and update the DOM</li>
    <li>Creates simple, reusable components</li>
    <li>Handles DOM creation and updates automatically</li>
    <li>Saves a lot of development time</li>
  </ul>

  <h3>JavaScript vs React</h3>
  <ul>
    <li><strong>JavaScript:</strong> Imperative – define steps to reach the desired state</li>
    <li><strong>React:</strong> Declarative – define the state, React handles the steps</li>
  </ul>

  <h3>What are Components?</h3>
  <ul>
    <li>Reusable, modular parts of a web page</li>
    <li>Improve maintainability and optimization</li>
  </ul>

  <h3>What is IDE for React?</h3>
  <ul>
    <li>IDE = Integrated Development Environment</li>
    <li>Helps improve developer productivity and efficiency</li>
  </ul>

  <h3>Setup Steps</h3>
  <ol>
    <li>Install latest Node.js</li>
    <li>Create project using Vite + React:
      <pre><code>npm create vite@latest &lt;project_name&gt;</code></pre>
    </li>
    <li>Install required npm modules:
      <pre><code>npm install</code></pre>
    </li>
    <li>Run the development server:
      <pre><code>npm run dev</code></pre>
    </li>
  </ol>

  <h3>Project Structure</h3>
  <ul>
    <li><code>node_modules</code>: Contains dependencies</li>
    <li><code>public</code>: Static assets</li>
    <li><code>src</code>: Source files
      <ul>
        <li><code>components</code>: Reusable React components</li>
        <li><code>assets</code>: Images, fonts, etc.</li>
        <li><code>style</code>: CSS and stylesheets</li>
      </ul>
    </li>
    <li><code>package.json</code>: Project metadata and dependencies</li>
    <li><code>vite.config.js</code>: Vite configuration</li>
    <li><code>.gitignore</code>: Files/folders to exclude from Git</li>
    <li><code>index.html</code>: Main HTML file</li>
  </ul>

  <h3>File Extensions</h3>
  <ul>
    <li><code>.js</code>: JavaScript files for logic</li>
    <li><code>.jsx</code>: JavaScript XML – combines JS and HTML-like syntax, used for UI</li>
  </ul>

  <h3>Functional vs Class-Based Components</h3>
  <ul>
    <li><strong>Function-based:</strong>
      <ul>
        <li>Initially stateless</li>
        <li>Can use hooks</li>
        <li>Simpler and concise</li>
        <li>More popular</li>
      </ul>
    </li>
    <li><strong>Class-based:</strong>
      <ul>
        <li>Stateful</li>
        <li>Uses lifecycle methods</li>
        <li>More verbose</li>
        <li>Not preferred in modern React</li>
      </ul>
    </li>
  </ul>

  <h3>What is JSX?</h3>
  <ul>
    <li>JSX defines how UI will look</li>
    <li>It’s not HTML – it gets compiled to JavaScript</li>
  </ul>

  <h3>Exporting Components</h3>
  <ul>
    <li>Enables reuse in other files</li>
    <li><strong>Default export:</strong> exports one main component</li>
    <li><strong>Named export:</strong> allows multiple exports from a file</li>
    <li>Use <code>import</code> to use exported components</li>
  </ul>

  <h3>Other Important Points</h3>
  <ul>
    <li>Component names must start with a capital letter</li>
    <li>HTML can be written in XML-like JSX</li>
    <li>CSS can be written in separate files and imported</li>
  </ul>

  <h3>Dynamic Components</h3>
  <ul>
    <li>JSX supports dynamic, interactive UI components</li>
    <li>Use <code>{}</code> to embed JavaScript expressions inside JSX</li>
  </ul>

  <h3>What is Bootstrap?</h3>
  <ul>
    <li>Responsive design framework</li>
    <li>Pre-built UI components</li>
    <li>Highly customizable</li>
    <li>Cross-browser compatible</li>
    <li>Open source</li>
  </ul>

  <h3>Installing Bootstrap</h3>
  <pre><code>npm install bootstrap</code></pre>

  <h3>Importing Bootstrap</h3>
  <pre><code>import "bootstrap/dist/css/bootstrap.min.css"</code></pre>

  <p>Bootstrap is very simple to use. You can directly use ready-made components and also add your own custom classes as needed.</p>

<h3>What are Fragments?</h3>
<ul>
  <li>Allow grouping of multiple elements without adding extra DOM nodes</li>
  <li>Helps maintain a cleaner and more consistent DOM structure</li>
  <li>Syntax:
    <pre><code>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;
&lt;&gt;&lt;/&gt;</code></pre>
  </li>
</ul>

<h3>What is the <code>map()</code> Method?</h3>
<ul>
  <li>Used to render lists from array data</li>
  <li>Transforms array elements into JSX</li>
  <li>Supports inline rendering</li>
  <li>Example:
    <pre><code>{items.map(item =&gt; &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;)}</code></pre>
  </li>
  <li><strong>Key prop:</strong> Assign a unique key for optimized re-rendering
    <pre><code>&lt;div key={item.id}&gt;{item.name}&lt;/div&gt;</code></pre>
  </li>
</ul>

<h3>Conditional Rendering</h3>
<ul>
  <li>Used to display content based on a condition</li>
  <li>Common methods:
    <ul>
      <li><strong>If-else:</strong> Use traditional JavaScript conditionals</li>
      <li><strong>Ternary operator:</strong> <code>{condition ? &lt;ComponentA /&gt; : &lt;ComponentB /&gt;}</code></li>
      <li><strong>Logical AND (&&):</strong> <code>{condition &amp;&amp; &lt;Component /&gt;}</code></li>
    </ul>
  </li>
</ul>

What are props?
->mechanism for passing data in react components.
->pass data from parent to child
->defined as the attribute in the jsx
->work same as argument in the function
->props are used to pass data via parent to child

CSS modules ?
->localized class names to avoid global conflict
->style are scpoped
->helps in creating component-specific styles
->automatically generates unique class names
->promotes modular and maintainable css
->it is the best practice to use <filename>.module.css as the css module name.