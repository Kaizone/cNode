import React, { Component } from 'react';

import RouterIndex from './router/index';
import Index from './view/index';

import MinHeader from './view/min-header';
import MinFooter from './view/min-footer';
import './view/index.css';
class App extends Component {

  render() {
    return (
        <div className="pageContainer">
          <MinHeader/>
          <main className="main">
            <RouterIndex></RouterIndex>
          </main>
          <MinFooter/>

        </div>
    )

  }
}

export default App;
