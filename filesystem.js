//The Node.js file system module allows you to work with the file system on your computer performing such actions as creating, updating, reading, renaming, and deleting files.

const fs = require('fs').promises;

async function fileSystemFeatures() {
    try {

// Writing to a file
        await fs.writeFile('file.txt', 'Writing to a file replaces the specified file and content.')
        console.log('File has been sucessfully saved.');
    
// Appending to a file
        await fs.appendFile('file.txt', 'The appendFile method appends the specified content to the file.')
        console.log('File has been sucessfully updated.');

// Reading a File 

    // Takes 2 parameters: path to file and encoding (if not specified raw buffer data will be returned).

        const data = await fs.readFile('file.txt', 'utf8')
        console.log('File content:', data);
    
// Renaming a File
        await fs.rename('file.txt', 'fileX.txt')
        console.log('File has been sucessfuly renamed.');
    
// Deleting a file
        await fs.unlink('fileX.txt') 
        console.log('File has been sucessfully deleted.');

    }catch (err){
        console.log('Error:', err)
    }
}

fileSystemFeatures();  // caling the function to run through the file system features and log the results to the console.