const express = require('express');

const app = express();
const port = 5001;

app.get('/home', (req, res) => {
    res.send('Welcome to HomePage');
});

app.listen(port, () => console.log(`Listening to port ${port}`));
