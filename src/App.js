import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

const start = 0;
const limit = 10;
const query = `?start=${start}&limit=${limit}`;


class App extends Component {

  state = {
    picArray: []
  };



  componentDidMount() {
    return (

        fetch(`http://media.mw.metropolia.fi/wbma/media${query}`).then((respo) => {
          return respo.json();
        }).then((myJson) => {
          console.log(myJson);
          //alkaa
/*
          // some data
          const data = {
            username: 'someuser',
            password: 'somepassword'
          };
// settings object for fetch
          const settings = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          };
          fetch('someUrl', settings)
          .then( (response) => {
            return response.json();
          })
          .then( (result) => {
            console.log(result);
          });

*/
          //loppuu
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
