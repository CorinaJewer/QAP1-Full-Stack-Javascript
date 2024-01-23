/* The node path module provides utilities for working with file and directory paths. Commonly used to check of paths are absolute or relative, to parse a path string into an object, to extract information from file names and to construct file paths.*/

const path = require('path');

// The path.basename() method returns the last portion of a path.

console.log(path.basename('/Users/keyinstudent/Desktop/Advanced JavaScript/QAP1/QAP1-Full-Stack-Javascript/path.js'));

// The path.parse() method returns an object whose properties represent significant elements of the path. 

console.log(path.parse('/Users/keyinstudent/Desktop/Advanced JavaScript/QAP1/QAP1-Full-Stack-Javascript/path.js'));

// The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. 

console.log(path.extname('/Users/keyinstudent/Desktop/Advanced JavaScript/QAP1/QAP1-Full-Stack-Javascript/path.js'));

// The path.isAbsolute() method return true is the path is an absolute path which is a path that describes the full directory from the root directory to the specific file or directory. 

console.log(path.isAbsolute('/Users/keyinstudent/Desktop/Advanced JavaScript/QAP1/QAP1-Full-Stack-Javascript/path.js'));

// The path.dirname() method extracts the directory nae from the file path.

console.log(path.dirname('/Users/keyinstudent/Desktop/Advanced JavaScript/QAP1/QAP1-Full-Stack-Javascript/path.js'));

// The path.join() method is used to join path segments together creating a normalized path. Resulting path is parent directory of Adavnced JavaScript.

console.log(path.join('/Users', 'keyinstudent', 'Desktop', 'Adavnced JavaScript', '..'));







