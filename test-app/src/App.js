import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { observer } from 'mobx-react';

class App extends Component {
  render() {
    const { UiStore } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{UiStore.message} to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container-fluid">
          <button className="btn btn-primary">
            bootstrap <i className="fa fa-home" />
          </button>
        </div>
      </div>
    );
  }
}

export default observer(App)
