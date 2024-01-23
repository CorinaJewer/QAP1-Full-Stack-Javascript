/* A stream is an object that allows users to read or write data in a continous manner rather than all at once. Streams are used to handle reading & writing files in both a time & memory efficient way. Somes use cases include reading or writing large files in chunks rather than loading the entire file into memory, handling HTTP requests and responses, and logging data.*/

//   4 Types of Streams

// - Writable - write data to streams 
// - Readable - read data from streams
// - Duplex - steams that are readable & writable
// - Transform - streams that can modify data as it is written and read

// Import classes from stream module

const {Readable, Writable, Transform} = require ('stream'); 

// Create a new readable stream named InStream

const inStream = new Readable({read(){
    //read method empty for now as pushing data manually.
}});

// Add content to readable stream

inStream.push('Full Stack Javascript QAP1: '); //pushes string into InStream, first chunck of data
inStream.push('Stream Core Module'); // pushes string into Instream, second chunk of data
inStream.push(null); // end of stream


//inStream.pipe(process.stdout); //Take whatever comes into inStream and output to the console

//Create a Transform Stream 

//This can be useful for adjusting data to store in a particular format for example.


const transformData = new Transform({
    transform(chunk, encoding, callback) {
      // Convert to a string and then a substring of the original string
      const transformedData = chunk.toString().substring(0,11);
      this.push(transformedData); // push to output of stream
      callback(); // indicate complete
    }
  });

// Create a Writable Stream

const outStream = new Writable({ // new const outStream 
    write(chunk, encoding, callback) {
        // write method received the chunk of data being written in the stream, encoding(optional) and a callback function that is called to indicated data has been processed. It assumes that the incoming chunk is a string (UTF-8 encoded by default). 

       // Log the received data to the console
    console.log(`${chunk}`);
    callback();
    }
});

inStream.pipe(transformData).pipe(outStream); //Pipe the Readable stream to the Transform stream and then pipe its output to the Writable Stream


