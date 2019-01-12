import React, { Component } from 'react';
import classNames from 'classnames';
import './Colors.css';

const SW_URL = 'https://swapi.co/api/people';
const fetchData = () => {
    return fetch(SW_URL)  //!!!UWAGA: ten return zwraca promis'a - WAZNE!!!
        .then(resp => resp.json())
};

const promiseLoader = (WrappedComponent) => {

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true,
                data: null,
            }
        }

        componentDidMount() {
            const { promise } = this.props;

            promise().then((json) => {
                this.setState({
                    data: json,
                })
            })
        }

        render() {
            const { data } = this.state;
            return data ?
                <WrappedComponent data={this.state.data} />
                : <div>loading...</div>
        }
    }
}

const Data = (props) => {
    const { data } = props;
    return data.results.map(n => <div key={n.name}>{n.name}</div>);
}

const PromiseData = promiseLoader(Data);

class ColorMouse extends Component {
    render() {
        return <PromiseData promise={fetchData} />
    }
}

export default ColorMouse;

