import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Menu.css';

const cnMenu = cn('Menu');


export interface IMenuProps {
  className?: string;
}

export const Menu: React.SFC<IMenuProps> = ({className}) => (
  <div className={`${cnMenu()} ${className}`}>
    <div className={cnMenu('Burger')}>
      <div className={cnMenu('Line')} />
    </div>
    <nav className={cnMenu('Nav')}>
      <a className={'Menu-Item'} href="#">home</a>
      <a className={'Menu-Item'} href="#">projects</a>
      <a className={'Menu-Item'} href="#">studio</a>
      <a className={'Menu-Item'} href="#">news</a>
      <a className={'Menu-Item'} href="#">contact</a>
    </nav>
  </div>
);
