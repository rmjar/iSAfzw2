import React, { Component, Fragment } from 'react';



const products =[
    {
        id: 1,
        name: 'TV 1',
        category: 'RTV',
    }, {
        id: 2,
        name: 'TV 2',
        category: "RTV",
    }, {
        id: 3,
        name: 'Dishwasher',
        category: "AGD",
    }, {
        id: 4,
        name: 'Washing machine',
        category: 'AGD',
    }, {
        id: 5,
        name: "Red dead",
        category: 'PS4'
    }
]

const categories = products.reduce((acc, product) => {
    if (!acc.includes(product.category)) {
        acc.push(product.category);
    }
    return acc;
}, []);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            category: 'RTV',
            sortAsc: true,
        };
    }


    handleChange = (event) => {
        const { value, name } = event.target; //event.target przekazuje nazwę danego pola i wartość danego pola

        this.setState({
            [name]: value, // [klucz] - wyciągnij nazwę klucza z obiektu i przypisz wartość value odpowiednik obj[name] = value
        });
    }

    handleSort = () => {
        this.setState((prevState) => ({
            sortAsc: !prevState.sortAsc,
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const { search, sex, sortAsc } = this.state;
        return (
            <Fragment>
                <h1>Contact</h1>
                <form onSubmit = {this.handleSubmit}>
                <div></div>
                    <input type="text" onChange={this.handleChange} name="search" value={search} />
                    <select name="sex" onChange={this.handleChange} value={sex}>
                        {categories.map((category) => <option value={category} key={category}>{category}</option>)}
                    </select>
                    <button type="submit">Send</button>
                </form>

                <div onClick={this.handleSort}>sorting asc: {sortAsc.toString()}</div>
                <div>
                    {
                        products
                        .filter(({name}) => {
                            const {search} = this.state;
                            return name.toLowerCase().includes(search.toLowerCase()) || !search;
                        })
                        .sort (({name: nameA}, {name: nameB}) => {
                            return sortAsc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA)
                        })
                        .map(({name, category}) => <div>{`${name}, ${category}`}</div>)
                    }
                </div>
            </Fragment>
        )
    }
}

export default Contact;
