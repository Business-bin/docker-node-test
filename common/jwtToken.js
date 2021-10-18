const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

//JWT 토큰 생성
/*
    payload : 사용자의 profile 정보(토큰에 넣을 데이터)
 */
generateToken = (payload) => {
    try{
        return jwt.sign(
            {},
            jwtSecret,
            {expiresIn: '1d'}

        )
    }catch (e) {
        console.log(e)
    }
};
exports.generateToken = generateToken;

// JWT 디코딩
// jwtSecret을 통해 토큰을 디코딩, 유효성 검사 뒤 토큰에 담긴 데이터 반환
function decodeToken(token) {
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, jwtSecret, (error, decoded) => {
                if(error) reject(error);
                resolve(decoded);
            });
        }
    );
    // try{
    //     jwt.verify(token, jwtSecret)
    // }catch (e) {
    //     console.log(e)
    // }
}

// JWT 처리 미들웨어
exports.jwtMiddleware = async (req, res, next) => {
    const token = req.cookies.access_token; // 쿠키에서 access_token 읽음
    if(!token) return next(); // 토큰 없으면 바로 다음 작업 진생

    try {
        const decoded = await decodeToken(token); // 토큰디코딩
        console.log(`decoded user id = ${decoded}`);    // 삭제 예정
    //     global.tokenUserId = decoded.user_id;
        // 토큰 만료일이 12시간밖에 안남으면 토큰 재발급
        // if(Date.now() / 1000 - decoded.iat > 60 * 60 * 12) {
        //     // 12시간 지나면 갱신
        //     // const { _id, profile } = decoded;
        //     // const freshToken = await generateToken({ _id, profile }, 'account');
        //     // const { user_id } = decoded;
        //     const freshToken = await generateToken({});
        //
        //     // 쿠키에 설정
        //     res.cookies('access_token', freshToken, {
        //         maxAge: 1000 * 60 * 60 * 24, // 1days
        //         httpOnly: true
        //     });
        // }
    } catch (e) {
        // token validate 실패
        console.log('JWT 미들웨어 에러');
        res.clearCookie('access_token');
        console.log(e);
    }
    return next();
};