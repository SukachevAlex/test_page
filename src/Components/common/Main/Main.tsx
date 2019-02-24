import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Main.css';
import { Filter } from '../Filter/Filter';
import { Project } from '../Project/Project';

const cnMain = cn('Main');

export interface IMainProps {
  className?: string;
}

export const Main: React.SFC<IMainProps> = (props) => (
  <div className={cnMain()}>
    <div className={cnMain('Start')}>
      <h2 id='projects' className={cnMain('Title')}>Projects</h2>
      <Filter items={['All', 'House', 'Commercial', 'Personal', 'Studio Lab']} />
    </div>
    <Project />
  </div>
);
