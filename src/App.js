import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './container/home';

export default class App extends React.Component {

  render() {
    return (
      <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </main>
    );
  }
}
