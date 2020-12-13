const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Good Morning Everyone!!! Testing App Service! and test');
});

app.listen(80, () => { console.log('Listening on port 8080') })
