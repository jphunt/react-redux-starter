import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './header'

export default class App extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="app-header">
                    <Header />
                </div>
                {/*<div className="main-container">
                    <div className="main-menu"> menu</div>
                    <div className="main-content-container">
                        <div className="main-content">main content</div>
                        <div className="page-footer">footer</div>
                    </div>
                </div>*/}


                {this.props.children}
            </div>
        );
    }

}