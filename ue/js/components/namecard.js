import * as React from 'react';
import {User} from '../model/user';

export class NameCard extends React.Component {

    static defaultProps = {
        user: {
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
        },
        dispWatchButton: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        let btnNode = this.props.dispWatchButton ? (
            <div style={{marginLeft: '12px', marginRight: '20px', marginTop: '16px'}}>
                <button type='button' className='btn btn-primary btn-block'>+ 关注</button>
            </div>
        ) : '';
        return (
            <div className='jumbotron panel' style={{width: '250px', paddingBottom: '16px'}}>
                <div className='jumbotron-photo' style={{height: '250px'}}><img src='../static/img/ayano_332.png' /></div>
                <div style={{marginLeft: '8px', marginTop: '16px'}}>
                    <h4 className='username'>{this.props.user.username}</h4>
                    <img src='../static/img/female_32.png' style={{marginLeft: '4px', height: '16px', width: '16px', display: 'inline', verticalAlign: 'middle'}} />
                    <br/>
                    <div style={{marginTop: '4px'}}>
                        <span className='attribute'>{this.props.user.signature}</span>
                    </div>
                    <div>
                        <img src='../static/img/city_16.png' className='attribute'/>
                        <span className='attribute-name'>所在地</span>
                        <span className='attribute'>&emsp;{this.props.user.province}</span><span className='attribute' style={{margin: '4px'}}>{this.props.user.city}</span>
                    </div>
                    <div>
                        <img src='../static/img/city_16.png' className='attribute'/>
                        <span className='attribute-name'>年龄</span>
                        <span className='attribute'>&emsp;&emsp;</span><span className='attribute'>{this.props.user.age}岁</span>
                    </div>
                    <div>
                        <img src='../static/img/run_16.png' className='attribute'/>
                        <span className='attribute-name'>里程</span>
                        <span className='attribute'>&emsp;&emsp;</span><span className='attribute'>{this.props.user.mileage}m</span>
                    </div>
                    {btnNode}
                </div>
            </div>
        );
    }
}