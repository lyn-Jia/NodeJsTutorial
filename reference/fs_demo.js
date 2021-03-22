//File system

const fs = require('fs');
const path = require('path');


// // Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('folder created...');
// });

// // Create and over write to file //Have to use with createfolder if folder does not exist
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', 
//     err => {
//         if(err) throw err;
//         console.log('File written to...'); 
//     }
// );

// // Write to file, no overwrite
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Second World!', 
//     err => {
//         if(err) throw err;
//         console.log('File written to...'); 
//     }
// );

// Read file  //utf8 encoding required.
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, dataInFile) => {
//     if(err) throw err;
//     console.log(dataInFile);
// });

// Rename file   'hello.txt' to 'helloWrold.txt'
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
//         path.join(__dirname, '/test', 'helloWorld.txt'), 
//     err => {
//         if(err) throw err;
//         console.log('File renamed...');
//     }
// );