import React, {Component} from 'react';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/news">News</Link>
        </div>
    }
}