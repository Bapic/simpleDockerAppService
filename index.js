const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Good Morning Everyone!This is a very great day');
});

app.listen(80, () => { console.log('Listening on port 8080') })
