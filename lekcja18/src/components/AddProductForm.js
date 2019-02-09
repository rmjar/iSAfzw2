import React, { Component } from 'react';
import { connect } from 'react-redux';

const actionCreator = (product) => {
    return ({
        type: 'ADD_PRODUCT',
        payload: {
            name: product,
            checked: false,
        },
    })
}

class AddProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: '',
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState(() => ({
            [name]: value,
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const { product } = this.state;
        const { add } = this.props;
        return (<form onSubmit={this.handleSubmit} >
            <input type="text" onChange={this.handleChange} name="product" value={product} />
            <button type="submit" onClick={() => product && add(product)}>Add</button>
        </form>)
    }
}


const mapDispatchToProps = dispatch => ({
    add: (product) => {
        console.log(product);
        dispatch(actionCreator(product))
    },
});

export default connect(null, mapDispatchToProps)(AddProductForm);