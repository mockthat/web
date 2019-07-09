const mockthat = require('@mockthat/core');
const path = require('path');
const express = require('express');
const argv = require('minimist')(process.argv.slice(2));
const open = require('open');

const port = argv.port || 7000;

mockthat.initialize(path.resolve(argv.path || './mocks'), port)
  .use('/', express.static(path.join(__dirname, '../dist/web')));

console.log('Webpage attached!');
open(`http://localhost:${port}/`);
