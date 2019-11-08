const express = require('express')
const app = express()
// const port = 80;
// const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const URL = process.env.NODE_ENV === 'production' ? 'https://jcole-p.herokuapp.com' : 'http://localhost:3001'

// const db = require('./models')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}