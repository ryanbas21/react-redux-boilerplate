const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT = 3000;
const { getUser, createUser } = require('./controllers/usercontroller');

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(cookieparser());

// app.use(express.static(__dirname + '../public/'))
app.use((req,res,next) => {
  res.header('Acess-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req,res) => res.status(200));
app.get('/disclaimer', (req,res) => res.status(200))
app.get('/subscribe', (req,res) => res.status(200))
app.get('login', (req,res) => res.status(200))
app.get('/signup', (req,res) => res.status(200))
app.get('/contact', (req,res) => res.status(200))
app.get('/blog', (req,res) => res.status(200))

app.listen((req,res) => console.log('running server on port 3000'));
