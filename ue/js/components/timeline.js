import * as React from 'react';

export class TimeLine extends React.Component {
    static defaultProps = {
        events : [
            {
                time: new Date(1000000000000),
                title: '续一秒',
                description: '诸葛亮下来战书，约我等明日决战。如何对敌？不会自己百度啊！'
            },
            {
                time: new Date(10000000),
                title: '离开羊驼',
                description: '我离开了羊驼。继续了充实的装逼生活。并且，我学会了在装逼中使用 c++ 和 傅里叶变换 。'
            },
            {
                time: new Date(10000000),
                title: '加入羊驼',
                description: '我加入了羊驼。开始了充实的装逼生活。并且，我学会了在装逼中使用 markdown 和 jenkins 。'
            }
        ]
    };
    render() {
        const arr_events = [];
        var lastYear = 0;
        var left = false;
        for (var event_id in this.props.events) {
            const event = this.props.events[event_id];
            if (event.time.getFullYear() != lastYear) {
                arr_events.push(
                    <dt key={event_id * 10 + 1}>{event.time.getFullYear()} 年</dt>
                );
                lastYear = event.time.getFullYear();
            }
            var positionClass;
            left = !left;
            if (left) {
                positionClass = 'pos-left';
            } else {
                positionClass = 'pos-right';
            }
            arr_events.push(
                <dd className={positionClass + ' clearfix'} key={event_id * 10 + 2}>
                    <div className="circ"></div>
                    <div className="time">{(event.time.getMonth() + 1) + "月" + (event.time.getDay() + 1) + "日"}</div>
                    <div className="events">
                        <div className="pull-left">
                            <img className="events-object img-rounded" src="../static/img/photo-1.jpg"/>
                        </div>
                        <div className="events-body">
                            <h4 className="events-heading">{event.title}</h4>
                            <p className="event-description">{event.description}</p>
                        </div>
                    </div>
                </dd>
            );
        }
        return (
            <div className="timeline">
                <dl>
                    {arr_events}
                </dl>
            </div>
        )
    }
}