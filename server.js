const express = require('express');
const path = require('path');

global.appRoot = path.resolve(__dirname);

const data = require(appRoot + '/photo-list.json');

const app = express();

const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send(data);
})

app.listen(port, () => console.log(`Listening to port ${port}`));
