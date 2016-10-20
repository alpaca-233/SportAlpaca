import * as React from 'react';
import {InfoPane} from './info-pane';
import {TimeLine} from './timeline';

export class PersonInfoTab extends React.Component {

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
        personInfo: {
            // TODO
        },
        events: [
            /* ... */
        ]
    };

    render() {
        return (
            <div>
                <div id="mileage-chart" style={{ width: "700px", display: 'inline'}}></div>
                <div className ="container-fluid">
                    <div className="row-fluid">
                        <InfoPane/><InfoPane/><InfoPane/>
                    </div>
                </div>
                <TimeLine/>
            </div>
        )
    }

    componentDidMount() {
        var pthis = this;
        $(function () {
            $('#mileage-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: pthis.props.chartData.username + " 的跑步数据",
                },
                subtitle: {
                    text: '数据来源: <a href="http://www.baidu.com">辣鸡百度</a>'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '每日步数 (步)'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '步数 <b>{point.y:.1f} 千步</b>'
                },
                series: [{
                    name: '每日步数',
                    data: pthis.props.chartData.weekDate,
                    dataLabels: {
                        enabled: false,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            });
        });
    }
}