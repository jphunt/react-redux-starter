import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu1 extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="main-menu">
                    <ul>
                        <li>
                            <Link to={"/menu1/page1"} activeClassName="active">page1</Link>
                        </li>
                        <li>
                            <Link to={"/menu1/page2"} activeClassName="active">page2</Link>
                        </li>
                        <li>
                            <Link to={"/menu1/page3"} activeClassName="active">page3</Link>
                        </li>
                    </ul>
                </div>
                <div className="content-container">
                    {this.props.children}
                    <div className="content-footer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptatem ratione sequi, vitae officiis ullam, nisi repellendus numquam rerum nihil eaque harum sint. Error tempora ullam inventore fuga deleniti, fugit?
                    </div>
                </div>

            </div>
        );
    }
}
export default Menu1;