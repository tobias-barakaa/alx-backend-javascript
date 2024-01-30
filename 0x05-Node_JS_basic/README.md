<h2> Node.js Basics
</h2>

<h6>Introduction to Node.js
 </h6>

<p> 
Node.js is an open-source, cross-platform JavaScript runtime built on Chrome's V8 JavaScript <br />engine. It allows developers to run JavaScript code on the server-side, <br />enabling the development of scalable <br />and high-performance web applications.<br />Node.js uses an event-driven, non-blocking I/O model, <br />making it efficient and suitable for building real-time applications.
</p>

<h5> Key Concepts
</h5>

<h6> 1. Event Loop </h6>

<p> 
Node.js operates on a single-threaded event loop. <br />This event-driven architecture allows handling <br />multiple concurrent connections without the need for multi-threading, making it efficient for I/O-intensive applications
</p>

<h6>
2. npm (Node Package Manager)
</h6>

<p> 
npm is the default package manager for Node.js.<br /> It enables developers to manage and share packages (libraries) of JavaScript code, <br />making it easy to incorporate external modules into their projects.
</p>

<h6> 3. Modules
</h6>

<p>Node.js uses a modular system where code is organized <br />into separate files called modules. Modules encapsulate code, making it<br /> reusable and maintainable. The require function is used to include modules in Node.js scripts.
</p>

<h6>
4. Callbacks
</h6>

<p>
Node.js heavily relies on asynchronous operations and callbacks.<br /> Callback functions are used to handle asynchronous tasks, <br />ensuring non-blocking behavior.
<p>

fs.readFile('file.txt', 'utf8', (err, data) => {<br />
  if (err) throw err;<br />
  console.log(data);<br />
});

<h6>
5. Core Modules
</h6>

<p>
Node.js provides a set of core modules for common tasks,<br /> such as file system operations (fs), HTTP server creation (http),<br /> and more. These modules can be included using the require <br />statement.
</p>

<h6>
The process Object
</h6>

<p> 
The process object is a global object in Node.js that provides information about,<br /> and control over, the current Node.js process.


</p>

<h6>
Key process Elements

</h6>

<p>
process.argv: An array containing command-line arguments.<br />
process.stdin, process.stdout, process.stderr: Streams for standard input, output, and error.<br />
process.env: Object containing user environment variables.<br />
process.pid: Process ID of the current process.<br />
process.platform: String identifying the operating system platform.<br />
process.exit([code]): Exits the current process with an optional exit code.<br />
process.on(event, callback): Registers event listeners for various events.<br />
</p>

<h6>
Shebang in Node.js Scripts

</h6>

<p>
A shebang (#!) is a special line at the beginning<br /> of a script that tells the operating system how to execute the script. In Node.js scripts,<br /> the shebang line is often used to specify the Node.js interpreter path.



</p>
Example:

#!/usr/bin/env  node <br />

console.log('Hello, Node.js!');

<p>
In this example, the shebang line #!/usr/bin/env node  <br />indicates that the script should be executed using the node interpreter. <br /> This allows you to run the script directly from the command line without explicitly  <br />invoking the node command
</p>


