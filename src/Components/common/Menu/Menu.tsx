import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Menu.css';

const cnMenu = cn('Menu');


export interface IMenuProps {
  className?: string;
}

export class Menu extends React.Component<IMenuProps, any> {
  constructor(props: IMenuProps) {
    super(props)
  }

  componentDidMount() {
    const menu = document.querySelector('.Menu');
    const burger = document.querySelector('.Menu-Burger');
    burger && burger.addEventListener('click', function(e) {
      menu && menu.classList.toggle('Menu_active');
    });
  }

  render() {
    return (
      <div className={`${cnMenu()} ${this.props.className}`}>
      <div className={cnMenu('Burger')}>
        <div className={cnMenu('Line')} />
      </div>
      <nav className={cnMenu('Nav')}>
        <a className={'Menu-Item'} href="#home">home</a>
        <a className={'Menu-Item'} href="#projects">projects</a>
        <a className={'Menu-Item'} href="#studio">studio</a>
        <a className={'Menu-Item'} href="#news">news</a>
        <a className={'Menu-Item'} href="#contact">contact</a>
      </nav>
    </div>
    )}
}
