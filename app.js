'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});

exports.app = app;
exports.HOST = HOST;
exports.PORT = PORT;