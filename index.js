require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const router = require('./routers');
const db = require('./db');
const {jwtMiddleware} = require('./common/jwtToken'); // jwt 미들웨어

db.connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(jwtMiddleware);
app.use('/', router);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use((req, res, next) => {
    res.status(404).send('요청한 페이지를 찾을 수 없습니다');
});

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port '+ process.env.PORT);
});

