const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi there team....good Morning!');
});

app.listen(80, () => { console.log('Listening on port 8080') })
