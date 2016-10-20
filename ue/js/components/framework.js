import * as React from 'react';

export class Framework extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.framework ? this.props : this.initialState;
    }

    initialState = {
        framework: (
            <div>
                <div id="nav-container">
                </div>
                <div className="container">
                    <div className="row" style={{marginTop: '64px'}}>
                        <div className="col-lg-3 col-md-12" style={{/*position: 'fixed'*/minWidth: '250px'}} id="namecard-container">
                        </div>
                        <div className="col-lg-9 col-md-12 panel" style={{backgroundColor: '#f0f1f5', paddingLeft: 0, paddingRight: 0, paddingTop: '8px'}}>
                            <div id="index-tab-pane-container"></div>
                        </div>
                    </div>
                </div>

                <div id="modal-container"></div>

                <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal1" >这是</button>
            </div>
        )
    };

    render() {
        return (
            <div id="framework">
                {this.state.framework}
            </div>
        )
    }
}