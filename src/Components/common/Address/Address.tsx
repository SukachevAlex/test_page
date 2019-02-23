import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Address.css';

const cnAddress = cn('Address');

export interface IAddressProps {
  className?: string;
}

export const Address: React.SFC<IAddressProps> = (props) => (
  <div className={cnAddress()}>
    <div className={cnAddress('Location')}>
      {'90802 california\nlong beach po\nbox 68789\n300 east ocean\nboulevard'}
      </div>
    <div className={cnAddress('Info')}>
      <a className={cnAddress('Phone')} href="tel:+6493456758">
        64 9 345 6758
      </a>
      <a className={cnAddress('Email')} href="mailto:info@dsgn-studio.com">
        info@dsgn-studio.com
      </a>
    </div>
  </div>
);
