const express = require('express');

const app = express();

let counter = 0;

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  //console.log(request);
  response.sendFile(__dirname + '/views/index.html')
});

app.get('/animals/meg', (request, response, next) => {
  response.sendFile(__dirname + '/views/meg.html');
});

app.get('/animals/:name', (request, response, next) => {
  counter++; // add 1 after every request
  let name = request.params.name;
  response.send(`
  <h1>Hello, I am ${name}!</h1>
  <p>This page has been displayed ${counter} times.</p>
  `);
});


app.listen(3000, () =>{
  console.log("Server listening on port 3000...");
});