const fs = require('fs');
fs.readFile('./data.txt', (err, data) => {
  console.log(data);
  console.log(data.toString('utf-8'));
});
const content = 'Hello Write';
fs.writeFile('./write.txt', content, (err) => {
  if (err) console.log(err);
});
