const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.send('회원가입');
});

router.get('/signin', (req, res) => {
    res.send('로그인');
});

module.exports = router;