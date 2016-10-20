import * as React from 'react';

export class CompetitionPane extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    mounted = false;

    static defaultProps = {
        data: {
            me: 10086,
            pid : 66666,
            name : '斗图装逼大会',
            start: new Date() - 0 + 5000,
            expiration: new Date() - 0 + 10000,
            type: 'install-b',
            holder: 10086, // 举办人
            competitors: [
                10087,
                10082,
                10088,
                10089,
                10081
            ],
            maximum: -1,
            isMine: true
        }
    };

    render() {
        var p = new Date();
        var statusNode;
        var timeclass;
        var seconds;
        var opstr;
        seconds = 0;
        if (p < this.props.data.start) {
            opstr = '加入比赛';
            timeclass = 'time-coming button-blue';
            statusNode = '未开始';
            seconds = this.props.data.start - p;
        } else if (this.props.data.start <= p && p < this.props.data.expiration) {
            opstr = '加入比赛';
            timeclass = 'time-under-way button-green';
            statusNode = '进行中';
            seconds = this.props.data.expiration - p;
        } else if (this.props.data.expiration <= p) {
            opstr = '已结束';
            timeclass = 'time-closed button-grey';
            statusNode = '已结束';
            seconds = p - this.props.data.expiration;
        }
        seconds = (seconds / 1000).toFixed(0);
        var timestring = '';
        var tmp;
        if ((tmp = seconds / (60 * 60 * 24)) > 1) {
            timestring += Math.floor(tmp) + "天";
            seconds %= 60 * 60 * 24;
        }
        if ((tmp = seconds / (60 * 60)) > 1) {
            timestring += Math.floor(tmp) + "小时";
            seconds %= 60 * 60;
        }
        if ((tmp = seconds / 60) > 1) {
            timestring += Math.floor(tmp) + "分";
            seconds %= 60;
        }
        timestring += seconds + "秒";

        var optionNode = '';
        if (!this.props.isMine) {
            optionNode = (
                <div className={timeclass.replace('time', 'option') + ' time'}>{opstr}</div>
            );
        }
        return (
            <div className="competition" style={{textAlign: 'center'}}>
                <img src="../static/img/baozou_128.png" width="80px" height="80px" />
                <strong>{this.props.data.name}</strong><br/>
                <div>
                    <img src="../static/img/holder_16.png" width={14 + 'px'} height={14 + 'px'} style={{display: 'inline', verticalAlign: 'middle'}}/>
                    <span className="competition-holder">{this.props.data.holder}</span>
                </div>
                <div>
                    <table className="table" style={{width: '204px'}}>
                        <tbody>
                        <tr>
                            <td>
                                <span className="competition-attrname">参与人数</span><br/>
                                <strong className="competition-attr">10/20</strong>
                            </td>
                            <td>
                                <span className="competition-attrname">我的名次</span><br/>
                                <strong className="competition-attr">1/10</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={"competition-attrname " + timeclass}>{statusNode}</span><br/>
                                <strong className={"competition-attr " + timeclass}>{timestring}</strong>
                            </td>
                            <td>
                                <span className="competition-attrname">比赛类型</span><br/>
                                <strong className="competition-attr">{this.props.data.type}</strong>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {optionNode}
                {/*{statusNode}*/}
            </div>
        )
    }


    componentDidMount() {
        this.mounted = true;
        const pthis = this;
        setInterval(() => {
            if (this.mounted) {
                pthis.forceUpdate();
            }
        }, 1000)
    }

    componentWillUnmount() {
        this.mounted = false;
    }
}