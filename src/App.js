import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {getAllMedia, getFilesByTag} from './utils/MediaAPI';
import Nav from './components/Nav';
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import Profile from './views/Profile';
import Single from './views/Single';
import {Grid} from '@material-ui/core';

class App extends Component {

  state = {
    picArray: [],
    user: null,
  };

  setUser = (user) => {
    // hae profiilikuva ja liitä se user-objektiin
    getFilesByTag('profile').then((files) => {
      const profilePic = files.filter((file) => {
        let outputFile = null;
        if (file.user_id === this.state.user.user_id) {
          outputFile = file;
        }
        return outputFile;
      });
      this.setState((prevState) => {
        return {
          user: {
            ...prevState.user,
            profilePic: profilePic[0],
          },
        };
      });
    });
    this.setState({user});
  };

  setUserLogout = (user) => {
    this.setState({user});
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
        <Router basename={'/~villeatu/periodi4/materialUI'}>
          <div className="App">
            <Grid container>
              <Grid item md={2} xs={12}>
                <Nav checkLogin={this.checkLogin}/>
              </Grid>
              <Grid item md={10} xs={12}>
                <Route path={`/home`} render={(props) => (
                    <Home  {...props} picArray={this.state.picArray}/>
                )}/>
                <Route exact path={`/`} render={(props) => (
                    <Login {...props} setUser={this.setUser}/>
                    //<Home picArray={this.state.picArray}/>
                )}/>
                <Route path={`/profile`} render={(props) => (
                    <Profile {...props} user={this.state.user}/>
                )}/>
                <Route path={`/single/:id`} component={Single}/>

                <Route path="/logout" render={(props) => (
                    <Logout {...props} setUser={this.setUser}/>
                )}/>
              </Grid>
            </Grid>
          </div>
        </Router>
    );
  }
}

export default App;
