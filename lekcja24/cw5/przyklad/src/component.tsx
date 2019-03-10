import * as React from 'react';

interface Props {
    name: string;
    surname?: string;
}

export class FullName extends React.Component<Props> {
    render() {
        return <h1 style={{ textAlign: 'center' }}>{this.props.name} {this.props.surname}</h1>;
    }
}