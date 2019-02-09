import React, { Component } from 'react';
import { connect } from 'react-redux';


const actionCreatorCheck = (name) => {
    return {
        type: 'CHECK',
        payload: { name }
    }
}

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { check } = this.props;
        return (
            this.props.products &&
            <ul style={{ listStyleType: "none" }}>
                {this.props.products.map(p => <li key={p.name} onClick={() => check(p.name)}>{p.checked.toString()} {p.name}</li>)}
            </ul> || null
        )
    }
}

const mapStateToProps = (state) => {
    const { products } = state;
    return {
        products
    }
}

const mapDispatchToProps = dispatch => ({
    check: (product) => { dispatch(actionCreatorCheck(product)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);