import React, { Component } from 'react';

import './App.css';
import Person from './Login';

const PERSON = {name:'', lastName: '', password: 'password' }

class App extends Component {
 render() {
    return (
      <div>
        <Person
          person={PERSON}
          onPersonSaved={ person => {
            console.log('App', person);
          }}
        />
      </div>
    );
  }

}





export default App;
