const express = require('express');
const request = require('request');

const url = require('url');

const PORT = 3000;
const app = express();

app
  .get('/pipe', r => request(url.format({ protocol: 'https', host: 'kodaktor.ru', pathname: '/g/forpipe' })).pipe(r.res))
  .listen(process.env.PORT || PORT, () => console.log(process.pid));

console.log('http://localhost:3000/pipe');
