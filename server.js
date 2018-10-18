const express = require('express');
const path = require('path');

global.appRoot = path.resolve(__dirname);

const data = require(appRoot + '/photo-list.json');

const headerData = require(appRoot + '/header.json');

const app = express();

const port = process.env.port || 5001;

app.get('/', (req, res) => {
    res.send(data);
});

app.get('/header', (req, res) => {
    res.send(headerData);
});

app.listen(port, () => console.log(`Listening to port ${port}`));
