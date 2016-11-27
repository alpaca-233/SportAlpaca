export class User {

    static currUser = new User("123", "123");

    constructor(account, passwd) {
        // login and get personal info
    }

    getInfo() {
        return {
            avatar:     '../static/img/ayano_332.png',
            uid:        123456789,
            gender:     'female',   // female, male, ₵*^&*@#
            username:   'alpaca__',
            phoneNum:   '15651656873',
            email:      'mist14@smail.nju.edu.cn',
            province:   '江苏',
            city:       '南京',
            mileage:    66666,     // 跑步里程数(m)
            birthday:   {
                year:   1996,
                month:  7,
                day:    1
            },
            followers: [
                10086,
                10087,
                10088,
                10089,
                10000
            ],
            follows: [
                10086, 10087,
                10088, 10089,
                10000
            ],
            age: 20,
            signature:  '顾狗子的脸，全世界最大最圆'
        };
    }
}