const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Good Morning! This is a great day');
});

app.listen(80, () => { console.log('Listening on port 8080') })
