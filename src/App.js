import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import {getAllMedia} from './utils/MediaAPI';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from './views/Profile';
import Single from './views/Single';

class App extends Component {

  state = {
    picArray: [],
  };

  componentDidMount() {
    getAllMedia().then(pics => {
      this.setState({picArray: pics});
    });
  }

  render() {

    return (
        <Router basename={'.'}>
          <div className="App">
            <Nav/>
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={(props) => (
                <Home picArray={this.state.picArray}/>
            )}/>
            <Route path={`${process.env.PUBLIC_URL}/profile`} component={Profile}/>
            <Route path={`${process.env.PUBLIC_URL}/single/:id`} component={Single}/>
          </div>
        </Router>
    );
  }
}

export default App;
