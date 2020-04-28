import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AllPlants from './AllPlants';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DisplayData from './DisplayData'

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Route exact path="/" component={AllPlants}/>

    <Route exact path="/plant/:plantId" component={DisplayData}/>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
