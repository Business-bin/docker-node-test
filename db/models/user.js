const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 어떤 타입을 넣어도 에러가 나지 않기 떄문에 스키마를 정의 해준다. 가비지 값이 들어오는것 도 막을 수 있다
const User = new Schema({
    user_id: {type:String, unique:true, require:true},             // 아이디
    user_pw:        String,             // 패스워드
    salt:           String,             // 솔트 키
    reg_dttm:       Date                // 가입일시
});

module.exports = mongoose.model('users', User);

/*
    type : number, string, date 등등...
    unique : true - 유니크 값
    required : true - 필수 값
    lowercase : true - 소문자만
    trim: true - 공백 제거
    max: 10,20 등 숫자로 설정 가능하며, 최대값 설정
    default: 디폴트 값 설정
 */