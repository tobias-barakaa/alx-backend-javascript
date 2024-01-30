<h2> Node.js Basics
</h2>

<h6>Introduction to Node.js
 </h6>

<p> 
Node.js is an open-source, cross-platform JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server-side, enabling the development of scalable and high-performance web applications. Node.js uses an event-driven, non-blocking I/O model, making it efficient and suitable for building real-time applications.
</p>

<h5> Key Concepts
</h5>

<h6> 1. Event Loop </h6>

<p> 
Node.js operates on a single-threaded event loop. This event-driven architecture allows handling multiple concurrent connections without the need for multi-threading, making it efficient for I/O-intensive applications
</p>

<h6>
2. npm (Node Package Manager)
</h6>

<p> 
npm is the default package manager for Node.js. It enables developers to manage and share packages (libraries) of JavaScript code, making it easy to incorporate external modules into their projects.
</p>

<h6> 3. Modules
</h6>

<p>Node.js uses a modular system where code is organized into separate files called modules. Modules encapsulate code, making it reusable and maintainable. The require function is used to include modules in Node.js scripts.
</p>

<h6>
4. Callbacks
</h6>

<p>
Node.js heavily relies on asynchronous operations and callbacks. Callback functions are used to handle asynchronous tasks, ensuring non-blocking behavior.
<p>

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

<h6>
5. Core Modules
</h6>

<p>
Node.js provides a set of core modules for common tasks, such as file system operations (fs), HTTP server creation (http), and more. These modules can be included using the require statement.
</p>

<h6>
The process Object
</h6>

<p> 
The process object is a global object in Node.js that provides information about, and control over, the current Node.js process.


</p>