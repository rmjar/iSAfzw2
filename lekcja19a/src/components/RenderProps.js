import React, { Component } from 'react';
import Client from './Client';

class RenderProps extends Component {
    render() {
        return (
            <div>
                Render Props
                {this.props.children('hello z funkcji', 'drugi parametr')}
            </div>
        );
    }
}

export default RenderProps;
