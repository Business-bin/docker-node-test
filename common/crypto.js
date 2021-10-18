const crypto = require('crypto');

const createSalt = () => {
    try{
        const buf = crypto.randomBytes(64)
        return buf.toString('base64');
    }catch (e){
        console.log(e);
    }
}

exports.createHashPW = (pw) => {
    try{
        const salt = createSalt();
        const hashPw = crypto.pbkdf2(pw, salt, 10000, 64, 'sha512');
        return {pw:hashPw.toString('base64'), salt};
    }catch (e){
        console.log(e);
    }
}