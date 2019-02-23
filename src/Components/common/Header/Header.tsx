import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Header.css';
import image from './image.png';
import { Logo } from '../Logo/Logo';
import { Social } from '../Social/Social';
import { Menu } from '../Menu/Menu';
import { Address } from '../Address/Address';

const cnHeader = cn('Header');

export interface IHeaderProps {
  className?: string;
}

export const Header: React.SFC<IHeaderProps> = (props) => (
  <header className={cnHeader()}>
    <div className={cnHeader('Left')}>
      <Logo text='Associates Studio Design' className={cnHeader('Logo')}/>
      <Social className={cnHeader('Social')}/>
    </div>
    <img className={cnHeader('Image')} src={image} alt=""/>
    <Address />
    <Menu className={cnHeader('Menu')}/>
  </header>
);
