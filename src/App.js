import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {getAllMedia} from './utils/MediaAPI';
import Nav from './components/Nav';
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import Profile from './views/Profile';
import Single from './views/Single';

class App extends Component {

  state = {
    picArray: [],
    user: null,
  };

  setUser = (user) => {
    this.setState({user: user});
  };

  checkLogin = () => {
    return this.state.user !== null;
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
            <Nav checkLogin={this.checkLogin}/>

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

            <Route path="/logout" render={(props) => (
                <Logout {...props} setUser={this.setUser}/>
            )}/>

          </div>
        </Router>
    );
  }
}

export default App;
