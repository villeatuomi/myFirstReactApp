import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import {getAllMedia} from './utils/MediaAPI';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from './views/Profile';
import Single from './views/Single';
import Login from './views/Login';

class App extends Component {

  state = {
    picArray: [],
    user: {}
  };

  setUser = (user) => {
    this.setState({user: user})
  };


  componentDidMount() {
    getAllMedia().then(pics => {
      this.setState({picArray: pics});
    });
  }

  render() {

    return (
        <Router basename={'/~villeatu/periodi4/login'}>
          <div className="App">
            <Nav/>

            <Route exact path={`/`} render={(props) => (
                <Login {...props} setUser={this.setUser}/>
                //<Home picArray={this.state.picArray}/>
            )}/>
            <Route path={`/home`} render={(props) => (
                <Home picArray={this.state.picArray}/>
            )}/>
            <Route path={`/profile`} render={(props) => (
                <Profile {...props} user={this.state.user}/>
            )}/>
            <Route path={`/single/:id`} component={Single}/>
          </div>
        </Router>
    );
  }
}

export default App;
