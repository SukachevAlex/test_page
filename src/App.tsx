import React, { Component } from 'react';
import { cn  } from '@bem-react/classname';

import './App.css';
import './fonts/fonts.css'
import { Header } from './Components/common/Header/Header';


const cnPage = cn('Page');

class App extends Component {
  render() {
    return (
      <div className={cnPage()}>
        <Header />
      </div>
    );
  }
}

export default App;
