# Namaste NodeJS

**NodeJS is a JavaScript runtime environment built using Chrome's V8 engine**

### Before learning NodeJS

1.  Learn JavaScript Basics
2.  Install NodeJS, VS Code, git, github repository (Softwares & tools).
3.  If you want add few extensions in VS Code Prettier - Code Formatter, vscode-icons and update the settings to pickup prettier on save option (shift + alt + f).

### About NodeJS & V8 Engine

- NodeJS super powers + V8 Engine === NodeJS
- V8 engine is written in C++ language
- NodeJS also a combination of C++ and JavaScript
- Running a JavaScript program outside the browser: node app.js

### Episode 4:

- Node modules and require keyword
- Different modules can be created and exports them to use in different modules.
- require keyword is used to import the module into another module.
- There are two different modules
  1.  Common JS module (CJS - Older way)
  - By default in NodeJS - package.json - {"type":"commonjs"}
  - module.exports = {}
  - require("path")
  - module.exports is an empty object {} - functions/variables can be added to this object - one of the way to export.
  - calculator (folder) - made this as a module. add.js and sub.js are exporting their functions and imported them in index.js and exported them again from there. So, now directly we can use calculator as module to import the functions which are exported in index.js
  2.  ES modules (MJS/ES6 module/ESM - Newer way)
  - package.json - {"type" : "module"}
  - export and import keywords are used directly on function/variables

**Import mock or constant data**

- data.json is the mockdata which is imported directly in app.js
