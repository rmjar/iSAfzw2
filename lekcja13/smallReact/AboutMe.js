import React, { Component } from 'react';


class AboutMe extends Component {
    componentDidMount() {
        fetch('https://api.github.com/users/' + this.props.me)
            .then(response.json())
            .then(console.log);
    }
    
    render() {
        const { me } = this.state;
        return <>
            {me}
        </>;

    }

}

ReactDOM.render(<AboutMe me="rmjar" />, document.getElementById('aboutMe'));