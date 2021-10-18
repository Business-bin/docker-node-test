const express = require('express');
const router = express.Router();
const jwt = require('../../common/jwtToken')

router.get('/signup', (req, res) => {
    res.send('회원가입');
});

router.post('/signin', (req, res) => {
    const token = jwt.generateToken({});
    console.log(token)
    const id = req.body.id;
    console.log(id)
    res.cookie('access_token', token, {httpOnly:true, maxAge: 1000 * 60 * 60 * 24})
    res.send('로그인 '+token);

    // res.send(req.cookies.aa)
    // res.send('로그인')
});

module.exports = router;