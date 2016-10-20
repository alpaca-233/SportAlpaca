/**
 * Created by alpaca on 16-10-19.
 */

import * as React from 'react';

export class InfoPane extends React.Component {

    static defaultProps = {
        data: {
            title: '装逼学',
            description: '截止目前，你已经装逼长达',
            strong: '6666 分钟'
        }
    };

    render() {
        return (
            <div className="span3" style={{marginTop: '36px', marginLeft: '24px', float: 'left', width: 200 + 'px' }}>
                <div className="tile" style={{backgroundColor: '#E6E9ED'}}>
                    <img src="../static/img/ayano_332.png" className="tile-image big-illustration"/>
                    <h5 className="tile-title" style={{fontSize: '16px'}}>{this.props.data.title}</h5>
                    <span style={{fontSize: '14px'}}>{this.props.data.description}</span><br/>
                    <a className="btn btn-info">{this.props.data.strong}</a>
                </div>
            </div>
        )
    }
}