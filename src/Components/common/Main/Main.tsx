import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Main.css';
import { Filter } from '../Filter/Filter';

const cnMain = cn('Main');

export interface IMainProps {
  className?: string;
}

export const Main: React.SFC<IMainProps> = (props) => (
  <div className={cnMain()}>
    <section className={cnMain('Start')}>
      <h2 className={cnMain('Title')}>Projects</h2>
      <Filter items={['All', 'House', 'Commercial', 'Personal', 'Studio Lab']} />
    </section>
  </div>
);
