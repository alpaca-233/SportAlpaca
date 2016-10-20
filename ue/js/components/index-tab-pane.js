import * as React from 'react';
import * as Highcharts from '../lib/highchart';
import {CompetitionPane} from './competition-pane';
import {PersonInfoTab} from './person-info-tab';
import {UserInfoPane} from './user-info-pane';

export class IndexTabPane extends React.Component {

    static defaultProps = {
        chartData: {
            username: '羊驼',
            weekDate: [
                ['10-01', 23.7],
                ['10-02', 16.1],
                ['10-03', 14.2],
                ['10-04', 14.0],
                ['10-05', 12.5],
                ['10-06', 12.1],
                ['10-07', 11.8],
                ['10-08', 11.7],
                ['10-09', 11.1],
                ['10-10', 11.1],
                ['10-11', 10.5],
                ['10-12', 10.4],
                ['10-13', 10.0],
                ['10-14', 9.3],
                ['10-15', 9.3],
                ['10-16', 9.0],
                ['10-17', 8.9],
                ['10-18', 8.9],
                ['10-19', 8.9],
                ['10-20', 8.9]
            ]
        },
        personInfo: [],
        events: [/* ... */],
        competitions: [/* ... */]
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className ="tabbable tabs-left clearfix">
                <ul className ="nav nav-tabs">
                    <li className ="active"><a href="#mileage-tab" data-toggle="tab" style={{fontSize: '14px'}}>运动</a></li>
                    <li className =""><a href="#competition-tab" data-toggle="tab" style={{fontSize: '14px'}}>竞赛</a></li>
                    <li><a href="#userinfo-tab" data-toggle="tab" style={{fontSize: '14px'}}>圈子</a></li>
                </ul>
                <div id="myTabContent" className ="tab-content" style={{marginLeft: '100px'}}>
                    <div className ="tab-pane fade active in" id="mileage-tab">
                        <PersonInfoTab chartData={this.props.chartData} personInfo={this.props.personInfo}/>
                    </div>
                    <div className ="tab-pane fade" id="competition-tab">
                        <div className="container-fluid">
                            <div className="row-fluid">
                                <CompetitionPane isMine={true}/><CompetitionPane isMine={true}/>
                                <CompetitionPane isMine={true}/><CompetitionPane isMine={true}/>
                                <CompetitionPane isMine={true}/><CompetitionPane isMine={true}/>
                                <CompetitionPane isMine={true}/><CompetitionPane isMine={true}/>
                                <CompetitionPane isMine={true}/><CompetitionPane isMine={true}/>
                                <CompetitionPane isMine={true}/><CompetitionPane isMine={true}/>
                                <CompetitionPane isMine={true}/><CompetitionPane isMine={true}/>
                                <CompetitionPane isMine={true}/><CompetitionPane isMine={true}/>
                            </div>
                        </div>
                    </div>
                    <div className ="tab-pane fade" id="userinfo-tab">
                        <UserInfoPane/>
                        <UserInfoPane/>
                        <UserInfoPane/>
                        <UserInfoPane/>
                    </div>
                </div>
            </div>
        )
    }

}