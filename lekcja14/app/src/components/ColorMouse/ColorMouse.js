import React, { Component } from 'react';
import classNames from 'classnames';
import './Colors.css';

const mouseMoveColor = (WrappedComponent) => {

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                offsetX: null,
                offsetY: null,
                listener: null
            }
        }

        componentDidMount() {
            const lstn = window.addEventListener('mousemove', ({ offsetX, offsetY }) => {
                this.setState({
                    offsetX,
                    offsetY
                });
            })
            this.setState({
                listener: lstn,
            })
        }

        componentWillUnmount() {
            
        }

        isTop() {
            return this.state.offsetY < window.innerHeight / 2;
        }

        render() {
            return <div>
                {
                    <WrappedComponent type={this.isTop()}>
                        {this.props.children}
                    </WrappedComponent>
                }</div>
        }
    }
}

const Button = (props) => {
    const { type, children } = props;
    return <div className={type ? 'blue' : 'green'}>
        <div>{type}</div>
        <div>{children}</div>
    </div>
}

const MobileButton = mouseMoveColor(Button);

class ColorMouse extends Component {
    render() {
        return <MobileButton>Kliknij</MobileButton>;
    }
}

export default ColorMouse;

