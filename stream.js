const fs = require('fs');
const stream = fs.createReadStream('./data.txt');
stream.on('data', (data) => {
  console.log(data);
});
stream.on('open', () => {
  console.log('Stream Opened');
});
stream.on('close', () => {
  console.log('Stream Closed');
});
