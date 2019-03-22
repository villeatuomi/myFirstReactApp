import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

const start = 0;
const limit = 10;
const query = `?start=${start}&limit=${limit}`;

class App extends Component {

  state = {
    picArray: [],
  };

  componentDidMount() {
    let allFetchPromises = [];
    let fileIdArray;
    return (
        fetch(`http://media.mw.metropolia.fi/wbma/media${query}`).then((respo) => {
              return respo.json();
            }).then((myJson) => {
              console.log(myJson);
              allFetchPromises.push(myJson);
              fileIdArray = myJson.map(mapItem => {

                return mapItem.filename.slice(0,-4);
              });
              console.log('Tässä on fetchattujen filujen id:t ', fileIdArray);

              Promise.all(fileIdArray.map(id => {
                return fetch(
                    `http://media.mw.metropolia.fi/wbma/uploads/${id}-tn160.png`).then(respo =>
                    respo).then(myJson => {
                      console.log(myJson, 'testi67');
                      //allFetchPromises.push(myJson);
                    }).catch(error =>
                    console.log(error));
              }));

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
