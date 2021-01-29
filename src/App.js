import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import configureStore from './store';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './container/home';
import { UserContext } from './userDetailsContext';

const store = configureStore();

export default class App extends React.Component {

  render() {
    return (
      <main>
            <Switch>
                <Route path="/" exact>
                  <Provider store={store}>
                    <Home/>
                  </Provider>
                </Route>
                <Route path="/about">
                  <UserContext.Provider value={this.props.userDetails}>
                    <About/>
                  </UserContext.Provider>
                </Route>
                <Route path="/contact" component={Contact}>
                  <UserContext.Provider value={this.props.userDetails}>
                    <Contact/>
                  </UserContext.Provider>
                </Route>
            </Switch>
        </main>
    );
  }
}
