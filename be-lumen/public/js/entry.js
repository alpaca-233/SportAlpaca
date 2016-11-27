import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RNavigator} from './components/navigator';
import {NameCard} from './components/namecard';
import {User} from './model/user';
import {IndexTabPane} from './components/index-tab-pane';
import {ModalDialog} from './components/modal-dialog';
import {Framework} from './components/framework';
import {CompetitionList} from './components/competition-list';

const rc = {};  // references to react components

function render_navigator() {
//----------------navigator bar-----------------------------
    const nav_data = {
        data: {
            headerName: '羊驼',
            indexUrl: 'index.html',
            navs: [{
                type: 'menu',
                text: 'alpaca__',
                items: [
                    {
                        type: 'item',
                        isActive: false,
                        text: 'Friends',
                        url: '#',
                    },
                    {
                        type: 'item',
                        isActive: false,
                        text: 'Settings',
                        url: '#'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        type: 'item',
                        isSeparator: false,
                        isActive: false,
                        text: 'Log out',
                        url: '#'
                    }
                ]
            }, {
                type: 'simple',    // simple, menu
                text: 'Index',
                url: '#',
                onclick: render_index
            }, {
                type: 'simple',    // simple, menu
                text: 'Health',
                url: '#'
            }, {
                type: 'simple',    // simple, menu
                text: 'Competitions',
                url: '#',
                onclick: render_competition
            }],
            selectedIndex: 1
        }
    };

    return rc['navigator'] = ReactDOM.render(
        <RNavigator data={nav_data}/>,
        document.getElementById('nav-container')
    );
}

function render_namecard() {
    return rc['namecard'] = ReactDOM.render(
        <NameCard user={new User('', '').getInfo()} dispWatchButton={true}/>,
        document.getElementById('namecard-container')
    );
}

function render_index_tab_pane() {
    return rc['indexTabPane'] = ReactDOM.render(
        <IndexTabPane/>,
        document.getElementById('index-tab-pane-container')
    );
}

function render_modal() {
    return rc['modal-dialog'] = ReactDOM.render(
        <ModalDialog/>,
        document.getElementById('modal-container')
    );
}

function prepare_index_framework() {
    const index_node = (
        <div>
            <div id="nav-container">
            </div>
            <div className="container">
                <div className="row" style={{marginTop: '64px'}}>
                    <div className="col-lg-3 col-md-12" style={{position: 'fixed', minWidth: '250px'}} id="namecard-container">
                    </div>
                    <div className="col-lg-9 col-md-12 col-md-offset-3 panel" id="index-tab-pane-container" style={{backgroundColor: '#f0f1f5', paddingLeft: 0, paddingRight: 0, paddingTop: '8px'}}>
                    </div>
                </div>
            </div>

            <div id="modal-container"></div>

            <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal1" >这是</button>
        </div>
    );
    if (!rc['framework']) {
        rc['framework'] = ReactDOM.render(
            <Framework framework={index_node}/>,
            document.getElementById('body')
        );
    } else {
        rc['framework'].setState({
            framework: index_node
        });
    }
}

function render_index() {
    prepare_index_framework();

    setTimeout(() => {
        render_navigator();
        render_namecard();
        render_index_tab_pane();
        render_modal();
    }, 1);
}

function prepare_competition_framework() {
    const body = (
        <div>
            <div id="nav-container"></div>
            <div className="container">
                <div className="row" style={{marginTop: '64px'}}>
                    <div className="col-lg-3 col-md-12" style={{/*position: 'fixed'*/minWidth: '250px'}} id="namecard-container">
                    </div>
                    <div className="col-lg-9 col-md-12 panel" id="competition-container" style={{paddingBottom: '24px', backgroundColor: '#f0f1f5', paddingLeft: 0, paddingRight: 0, paddingTop: '8px'}}>

                    </div>
                </div>
            </div>
        </div>
    );
    return rc['framework'].setState({
        framework: body
    });
}

function render_competition_list() {
    rc['competition-list'] = ReactDOM.render(
        <CompetitionList/>,
        document.getElementById('competition-container')
    )
}

function render_competition() {
    prepare_competition_framework();
    setTimeout(() => {
        render_navigator();
        render_competition_list();
    }, 1);
}

render_index();
