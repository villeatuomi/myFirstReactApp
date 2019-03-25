import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import {getAllMedia} from './utils/MediaAPI';


class App extends Component {

  state = {
    picArray: [],
  };

  componentDidMount() {
      getAllMedia().then(pics => {this.setState({picArray: pics})});
  }

  render() {

    return (
        <div className="App">
          <Home picArray={this.state.picArray} />
        </div>
    );
  }
}

export default App;
