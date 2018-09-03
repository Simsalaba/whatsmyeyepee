#!/usr/bin/env node

const request = require('request');

request('http://ipinfo.io/ip', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});