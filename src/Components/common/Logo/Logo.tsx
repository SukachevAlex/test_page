import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Logo.css';
import logo from './logo.png';

const cnLogo = cn('Logo');

export interface ILogoProps {
  className?: string;
  text?: string;
}

export const Logo: React.SFC<ILogoProps> = ({text, className}) => (
  <div className={`${cnLogo()} ${className}`}>
    <a className={cnLogo('Link')} href="#">
      <img className={cnLogo('Image')} src={logo} alt="Associates Studio Design"/>
    </a>
    <p className={cnLogo('Text')}>{text}</p>
  </div>
);
