var fs = require('fs');
var readableStream = fs.createReadStream('textFile.txt');
var fileData = '';

readableStream.on('data', function(chunk){
  data += chunk;
});

readableStream.on('end', function() {
  console.log(data);
});

