require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routers');
const db = require('./db');

db.connect();

app.use('/', router);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use((req, res, next) => {
    console.log(res.status);
    res.status(404).send('요청한 페이지를 찾을 수 없습니다');
});

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port '+ process.env.PORT);
});

