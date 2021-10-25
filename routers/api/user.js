const express = require('express');
const router = express.Router();
const User = require('../../db/models/user')
const jwt = require('../../common/jwtToken')
const crypto = require('../../common/crypto')
const date = require('../../common/dateFomat')

router.post('/signup', async (req, res) => {
    try {
        const {
            user_id,
            user_pw
        } = req.body
        const key = await crypto.encryption(user_pw);
        const user = new User({
            user_id,
            user_pw: key.pw,
            salt: key.salt,
            reg_dttm: date.getCurrentDate()
        });

        const result = await user.save();
        res.send('회원가입 성공 '+ result);
    }catch (e) {
        console.log('회원가입 에러');
        res.send('회원가입 에러');
        console.log(e);
    }
});

router.post('/signin', async(req, res) => {
    try{
        const {
            user_id,
            user_pw
        } = req.body
        const user = await User.findOne({user_id},{"user_id":true, "user_pw":true, "salt":true}).exec();
        const enPw = await crypto.confirmPw(user_pw, user.salt);
        if(user.user_pw === enPw){
            const token = jwt.generateToken({});
            res.cookie('access_token', token, {httpOnly:true, maxAge: 1000 * 60 * 60 * 24})
            // res.send('로그인 성공 '+user.user_id+'님 환영합니다');
            res.send(`로그인 성공 ${user.user_id}님 환영합니다`);
        }else{
            res.send('로그인 실패! id, password 확인');
        }
    }catch (e) {
        console.log('로그인 에러');
        res.send('로그인 에러');
        console.log(e);
    }
});

module.exports = router;