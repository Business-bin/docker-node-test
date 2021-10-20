const crypto = require('crypto');

const createSalt = () => {
    try{
        const buf = crypto.randomBytes(64)
        return buf.toString('base64');
    }catch (e){
        console.log(e);
    }
}

exports.encryption = pw => {
    const salt = createSalt();
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(pw, salt, 10000, 64, 'sha512', (err, key) => {
            if(err){
                console.log("err = "+err);
                reject(err)
            }
            resolve({pw:key.toString('base64'), salt})
        });
    })
}

exports.confirmPw = (pw, salt) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(pw, salt, 10000, 64, 'sha512', (err, key) => {
            if(err){
                console.log("err = "+err);
                reject(err)
            }
            resolve(key.toString('base64'))
        });
    })
}