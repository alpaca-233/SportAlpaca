/**
 * 查看用户列表时列表中的元素。
 * @author alpaca
 */

import * as React from 'react';
import {User} from "../model/user";

export class UserInfoPane extends React.Component {
    static defaultProps = {
        data: new User().getInfo()
    };
    render() {
        const data = this.props.data;
        return (
            <div className="friend-panel" style={{padding: '8px'}}>
                <table>
                    <tbody>
                    <tr>
                        <td style={{verticalAlign: 'top'}}>
                            <div>
                                <img className="avatar" src={this.props.data.avatar} height={48 + 'px'} width={48 + 'px'} style={{marginTop: '8px'}}/>
                            </div>
                        </td>
                        <td>
                            <div  style={{marginLeft: '12px', verticalAlign: 'top'}}>
                                <span className="small-username"><strong>{data.username}</strong></span>
                                <img src='../static/img/male_32.png' style={{marginLeft: '4px', height: '12px', width: '12px', display: 'inline', verticalAlign: 'middle'}} />
                                <span className="small-attribute">&nbsp;&nbsp;&nbsp;{data.signature}</span>
                                <div style={{fontSize: '12px'}}>
                                    关注:&nbsp;<span className="btn-link">233</span>&nbsp;|&nbsp;粉丝:&nbsp;<span className="btn-link">666</span>&nbsp;|
                                    里程:&nbsp;<span className="btn-link">6666m</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="btn btn-primary" style={{marginLeft: '370px', padding: '4px', fontSize: '10px', display: 'inline'}}>+ 关注</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr style={{height:'1px',border:'none',borderTop:'1.5px solid #E6E9ED'}} />
            </div>
        )
    }
}