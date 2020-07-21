import React, { Component } from 'react';
import Logo from "./logo";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
        </div>
        <div>
          <input placeholder="Search Bar" />
        </div>
        <div>
          Links here
        </div>
      </div>
    );
  }
}
