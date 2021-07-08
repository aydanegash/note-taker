
//npm packages
const http = require('http');
const express = require('express');
const path = require('path')

const app = express();
const PORT = 8000;


//routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));


 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());

 require('./routes/apiRoutes')(app);
 require('./routes/htmlRoutes')(app);


app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});