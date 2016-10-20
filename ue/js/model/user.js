export class User {

    static currUser = new User("123", "123");

    constructor(account, passwd) {
        // login and get personal info
    }

    getInfo() {
        return {
            avatar:     '../static/img/photo1.jpg',
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
            age: 20,
            signature:  '没有，快滚'
        };
    }
}