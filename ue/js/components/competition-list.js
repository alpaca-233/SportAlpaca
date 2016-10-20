/**
 * Created by alpaca on 16-10-19.
 */
import * as React from 'react';
import {CompetitionPane} from './competition-pane';

export class CompetitionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
    }

    getDefaultState() {
        return {
            competitions: [
                {
                    pid : 66666,
                    name : '斗图装逼大会',
                    start: new Date(),
                    expiration: new Date(),
                    type: 'install-b',
                    holder: '孙浩大哥', // 举办人
                    competitors: [
                        '段段儿子',
                        '考拉儿子',
                        '崔sb儿子',
                        '卉卉儿子',
                        '据说每五个人中只有一个人不是sb'
                    ],
                    maximum: -1,
                    isMine: false
                },
                {
                    pid : 66666,
                    name : '斗图装逼大会',
                    start: new Date(),
                    expiration: new Date(),
                    type: 'install-b',
                    holder: '孙浩大哥', // 举办人
                    competitors: [
                        '段段儿子',
                        '考拉儿子',
                        '崔sb儿子',
                        '卉卉儿子',
                        '据说每五个人中只有一个人不是sb'
                    ],
                    maximum: -1,
                    isMine: false
                },
                {
                    pid : 66666,
                    name : '斗图装逼大会',
                    start: new Date(),
                    expiration: new Date(),
                    type: 'install-b',
                    holder: '孙浩大哥', // 举办人
                    competitors: [
                        '段段儿子',
                        '考拉儿子',
                        '崔sb儿子',
                        '卉卉儿子',
                        '据说每五个人中只有一个人不是sb'
                    ],
                    maximum: -1,
                    isMine: false
                },
                {
                    pid : 66666,
                    name : '斗图装逼大会',
                    start: new Date(),
                    expiration: new Date(),
                    type: 'install-b',
                    holder: '孙浩大哥', // 举办人
                    competitors: [
                        '段段儿子',
                        '考拉儿子',
                        '崔sb儿子',
                        '卉卉儿子',
                        '据说每五个人中只有一个人不是sb'
                    ],
                    maximum: -1,
                    isMine: false
                }
            ]
        }
    }

    render() {
        const arr_comps = [];
        for (var comp_index in this.state.competitions) {
            const comp = this.state.competitions[comp_index];
            arr_comps.push(
                <CompetitionPane data={comp} key={comp_index}/>
            )
        }
        return (
            <div className="container-fluid">
                <div className="row-fluid">
                    {arr_comps}
                </div>
            </div>
        )
    }
}