/**
 * Created by alpaca on 16-10-18.
 */

export class Competition {

    constructor() {
    }

    getInfo() {
        return {
            pid: this.pid,
            name: this.name,
            start: this.start,
            expiration: this.expiration,
            type: this.type,
            competitors: this.competitors,
            maximum: this.maximum, // -1 - unbounded
        }
    }

    pid = 66666;
    name = '斗图装逼大会';
    start = {
        y: 2016,
        M: 11,
        d: 1,
        h: 8,
        m: 0,
        s: 0
    };
    expiration = {
        y: 2017,
        M: 11,
        d: 1,
        h: 8,
        m: 0,
        s: 0
    };
    type = 'install-b';
    competitors = [
        '孙浩大哥',
        '孙浩大哥2',
        '孙浩大哥3',
        '孙浩大哥的另一个大号',
        '据说每五个人中只有一个人不是sb'
    ];
    maximum = -1;
}