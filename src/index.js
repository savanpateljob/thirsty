import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Contact from './contact';
import * as serviceWorker from './serviceWorker';
import About from './about';
import Service from './service';
import PortFolio from './portfolio';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/portfolio" component={PortFolio} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();