import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';


const createActionSavePeople = (peopleList) => ({
  type: 'SAVE_PEOPLE_LIST',
  payload: peopleList,
})


const START_ADDR = 'https://swapi.co/api/people';

class App extends Component {

  fetchPeople = (url = START_ADDR) => {
    const { savePeopleToStore } = this.props;
    return fetch(url)
      .then((resp) => resp.json())
      .then(resp => savePeopleToStore(resp));
  }

  componentDidMount = () => {
    this.fetchPeople();
  }

  render() {
    const { peopleList, next, previous } = this.props
    return (
      <div>
        <h3>App</h3>
        <div>{peopleList && peopleList.map(person => <div>{person.name}</div>)}</div>
        {previous && <div onClick={() => {
          this.fetchPeople(previous)
        }}>PREV</div>}

        {next && <div onClick={() => {
          this.fetchPeople(next)
        }}>NEXT</div>}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  peopleList: state.peopleList,
  next: state.next,
  previous: state.previous,
})

const mapDispatchToProps = (dispatch) => ({
  savePeopleToStore: (list) => dispatch(createActionSavePeople(list)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
