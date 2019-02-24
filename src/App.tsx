import React, { Component } from 'react';
import { cn  } from '@bem-react/classname';

import './App.css';
import './fonts/fonts.css'
import { Header } from './Components/common/Header/Header';
import { Main } from './Components/common/Main/Main';


const cnPage = cn('Page');

class App extends Component {
  render() {
    return (
      <div className={cnPage()}>
        <Header />
        {/* <Main /> */}
      </div>
    );
  }
}

export default App;
