// README to run path_demo.js you have to cd to reference first then use "node path_demo".

const path = require('path'); //For working with files.

// Path
// Output: C:\Users\Jia\Desktop\NodeJS\reference\path_demo.js
console.log(__filename);

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Use path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base); // Base file name

// Concatenate paths
// __dirname C:\Users\Jia\Desktop\NodeJS\reference\
// Output: C:\Users\Jia\Desktop\NodeJS\reference\folder\file.html
console.log(path.join(__dirname, 'folder', 'file.html'));

