import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

class App extends Component {

  state = {
    picArray: []
  };

  componentDidMount() {
    return (
        fetch('./test.json').then((respo) => {
          return respo.json();
        }).then((myJson) => {
          console.log(myJson);
          this.setState({picArray: myJson});
        }).catch((error) => {
          console.log(error);
        })
    );

  }

  render() {

    return (
        <div className="App">
          <Table table={this.state.picArray}/>
        </div>
    );
  }
}

export default App;
