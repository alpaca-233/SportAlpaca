import * as React from 'react';

export class RNavigator extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.generateNavNode = this.generateNavNode.bind(this);
        this.state = this.props.data ? this.props.data : this.getDefaultState();
        this.setSelectedIndex = this.setSelectedIndex.bind(this);
    }

    render() {
        return (
            <nav className='navbar navbar-fixed-top navbar-inverse' role='navigation'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href={this.state.data.indexUrl}>{this.state.data.headerName}</a>
                    </div>
                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-5'>
                        {this.generateNavNode()}
                    </div>
                </div>
            </nav>
        );
    }

    /**
     * state data should be like this
     *
     * @returns {{data: {headerName: string, indexUrl: string, navs: *[]}}}
     */
    getDefaultState() {
        return {
            data: {
                headerName: 'NAV_HEADER_NAME',
                indexUrl: '/',
                navs: [{
                    type: 'simple',    // simple, menu
                    text: 'NAV_TEXT',
                    url: 'NAV_URL',
                    onclick: () => {
                        alert('stub!');
                    }
                }, {
                    type: 'menu',
                    text: 'NAV_MENU_TEXT',
                    items: [
                        {
                            type: 'item',       // item, separator, img
                            isActive: false,
                            text: 'NAV_MENU_1ITEM_TEXT',
                            url: 'NAV_MENU_ITEM_URL'
                        },
                        {
                            type: 'img',
                            url: '../static/img/fast.png'
                        }
                    ]
                }],
                selectedIndex: 0
            }
        }
    }

    generateNavNode() {
        let arr_nav_node = [];

        // generate navigating button list
        for (const nav_info_index in this.state.data.navs) {
            const nav_info = this.state.data.navs[nav_info_index];
            if (nav_info.type === 'simple') {
                let strClass = nav_info_index == this.state.data.selectedIndex ? 'active' : '';
                const functionList = [];
                functionList.push(this.setSelectedIndex.bind(null, nav_info_index));
                functionList.push(nav_info.onclick);
                arr_nav_node.push(
                        <li className={strClass} key={nav_info_index} onClick={this.onclickStub.bind(null, functionList)}>
                            <a href={nav_info.url}>{nav_info.text}</a>
                        </li>
                )
            } else if (nav_info.type === 'menu') {
                let menu_title = (
                    <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
                        {nav_info.text}
                        <b className='caret' />
                    </a>
                );
                let arr_menu_item = [];
                arr_menu_item.push(
                    <li className='dropdown-header' key={-1}>{nav_info.text}</li>
                );

                // generate drop-down menu
                if (nav_info.items) {
                    var item_index;
                    for (item_index in nav_info.items) {
                        const item = nav_info.items[item_index];
                        if (item.type === 'separator') {
                            arr_menu_item.push(
                                <li className='divider' key={item_index}/>
                            );
                        }
                        else if (item.type == 'item') {
                            let strClass = item.isActive ? 'active' : '';
                            arr_menu_item.push(
                                <li className={strClass} key={item_index}>
                                    <a href='#'>{item.text}</a>
                                </li>
                            );
                        }
                        else if (item.type == 'img') {
                            arr_menu_item.push(
                                <img src={item.url} style={{"horizontal-align": 'middle'}} key={item_index} width='80px' height='80px'  />
                            )
                        }
                    }
                }
                arr_nav_node.push(
                    <li className='dropdown' key={item_index + 1}>
                        {menu_title}
                        <ul className='dropdown-menu' role='menu'>
                            {arr_menu_item}
                        </ul>
                    </li>
                )
            }
        }
        return (
            <ul className='nav navbar-nav' style={{float: 'right', }}>
                {arr_nav_node}
            </ul>
        )
    }

    onclickStub(functionList) {
        for (const func of functionList) {
            if (func && func.call) {
                func.call();
            }
        }
    }

    setSelectedIndex(index) {
        this.state.data.selectedIndex = index;
        this.forceUpdate();
    }

}