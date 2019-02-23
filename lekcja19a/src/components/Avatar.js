import React, { Component } from 'react';

import { MyContext } from './App';

class Avatar extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {({ version, changeVersion }) => <div onClick={changeVersion} className="Avatar" style={{ backgroundColor: version }}>Avatar: {version}</div>}
            </MyContext.Consumer>
        );
    }
}

export default Avatar;
