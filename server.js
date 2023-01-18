'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const pug = require('pug');
const compiledFunction = pug.compileFile('template.pug');

// App
const app = express();
app.get('/', (req, res) => {
  res.send(compiledFunction({
    versionFrontend: '0.1.0'
  }));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);