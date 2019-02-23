import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Filter.css';

const cnFilter = cn('Filter');

export interface IFilterProps {
  className?: string;
  items: string[];
}

export const Filter: React.SFC<IFilterProps> = ({items}) => {
  const filterItems = items.map((item, index) => (
    <a className={cnFilter('Item', {'active': !index})} href="#" key={item}>{item}</a>
  ));

  return (
    <div className={cnFilter()}>
      {filterItems}
    </div>
  )};
