import React, {Component} from 'react';
//import Table from './components/Table';
//import logo from './logo.svg';
import './App.css';

//import Table from './components/Table';

class App extends Component {

  componentDidMount() {
    return (
        fetch('./test.json').then((respo) => {
          return respo.json();
        }).then((myJson) => {
          console.log(myJson);
        }).catch((error) => {
          console.log(error);
        })
  )

  }

  render() {

    return (
        <div className="App">
          <h1>moi</h1>
        </div>
    );
  }
}

export default App;
