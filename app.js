const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Backend Running...' })
});

app.listen(3000);
