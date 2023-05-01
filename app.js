'use strict';

const express = require('express');

// Constants
const PORT = 4000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Oh hi there!');
});

app.listen(PORT, HOST, () => {
    console.log(`Hey, good job! Your app is running on http://${HOST}:${PORT}`);
});