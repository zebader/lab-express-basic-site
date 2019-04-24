const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (request,response,next) =>{
  response.sendFile(__dirname + '/views/index.html')
})

app.get('/about.html', (request,response,next) =>{
  response.sendFile(__dirname + '/views/about.html')
})

app.get('/gallery.html', (request,response,next) =>{
  response.sendFile(__dirname + '/views/gallery.html')
})

app.get('/*', (request,response,next) =>{
  response.sendFile(__dirname + '/views/404.html')
})

app.listen(3002, () => {
  console.log('Express is running');
  
});