import * as React from 'react';

export class ModalDialog extends React.Component {

    static defaultProps = {
        id: 'modal1',
        title: '斗图装逼大会',
        content: (
            <a>这是一个链接</a>
        ),
        footer: (
            <div>
                <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button type="button" className="btn btn-primary">
                    提交更改
                </button>
            </div>
        )
    };

    static propType = {
        id: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title" id="myModalLabel">
                                {this.props.title}
                            </h4>
                        </div>
                        <div className="modal-body">
                            {this.props.content}
                        </div>
                        <div className="modal-footer">
                            {this.props.footer}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}