/**
 * 查看用户列表时列表中的元素。
 * @author alpaca
 */

import * as React from 'react';

export class UserInfoPane extends React.Component {
    static defaultProps = {
        data: {
            avatar:     '../static/img/ayano_cat.png',
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
        }
    };
    render() {
        return (
            <div className="friend-panel" style={{padding: '8px'}}>
                <table>
                    <tbody>
                    <tr>
                        <td style={{verticalAlign: 'top'}}>
                            <div>
                                <img src={this.props.data.avatar} height={48 + 'px'} width={48 + 'px'} style={{borderRadius: '4px'}}/>
                            </div>
                        </td>
                        <td>
                            <div  style={{marginLeft: '12px', verticalAlign: 'top'}}>
                                文乃姐
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}