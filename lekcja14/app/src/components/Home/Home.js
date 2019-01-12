
import React, { Component } from 'react';

const SW_URL = 'https://swapi.co/api/people/?search='

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            name: '',
            isLoading: true,
            data: null,
            sort: false,
        }
    }

    fetchData = (search = '') => {
        this.setState({
            isLoading: true,
            data: null,
        })

        fetch(SW_URL + search)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    data: json,
                    isLoading: false,
                })
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    handleSort = () => {

        this.setState((prevState) => {
            return {
                sort: !prevState.sort,
            }
        })
    }

    handleChange = (event) => {
        const { value, name } = event.target; //event.target przekazuje nazwę danego pola i wartość danego pola

        this.setState({
            [name]: value, // [klucz] - wyciągnij nazwę klucza z obiektu i przypisz wartość value odpowiednik obj[name] = value
        }, () => {
            this.fetchData(value);
        });
    }

    render() {

        const { isLoading, data, search, sort } = this.state;
        return <div> <h1>Home</h1>
            <form>
                <input type="text" name='search' value={search} onChange={this.handleChange} />
                <span onClick={this.handleSort}>{sort ? ' asc' : ' dsc'}</span>
            </form>
            {isLoading && <div>loading...</div>}

            {data && <div>Count: {data.results.length} </div>}
            {data && <div>{data.results
                .sort((a, b) => a.name.localeCompare(b.name) * (sort ? 1 : -1))
                .map(
                    ({ name }) => {
                        return <div key={name}>
                            {name}
                        </div>
                    }
                )}</div>}
        </div>
    }
}

export default Home;
