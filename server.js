const express = require('express');

const app = express();

const request = require('request');

const port = 5000;

const url = 'https://jsonplaceholder.typicode.com/photos';

app.get('/', (req, res, next) => {
    request({
        url: url,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
    });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
