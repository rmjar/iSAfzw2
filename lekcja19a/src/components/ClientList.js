import React, { Component } from 'react';
import Client from './Client';
import RenderProps from './RenderProps'

class ClientList extends Component {
    render() {
        return (
            <div className="ClientList">
                Client List
                <Client />
                <RenderProps>
                    {(value, value2) => {
                        return <div>siema w funkcji {value} {value2}</div>
                    }}
                </RenderProps>
            </div>
        );
    }
}

export default ClientList;
