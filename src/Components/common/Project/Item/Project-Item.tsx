import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Project-Item.css';

const cnProject = cn('Project');

export interface IProjectItemProps {
  className?: string;
  name?: string;
  rating?: string;
  description?: any;
  imageSrc?: string;
  type?: string;
  bgColor?: string;
  align?: string;
}

export const ProjectItem: React.SFC<IProjectItemProps> = ({name, rating, description, imageSrc, type, bgColor, align}) => (
  <div className={cnProject('Item', {'type': type, 'align': align})} style={{backgroundColor: bgColor}}>
    <div className={cnProject('Info')}>
      <div className={cnProject('Name')}>{name}</div>
      <div className={cnProject('Description')}>
        {description}
      </div>
      <a className={cnProject('Link')} href="#">view project</a>
      <div className={cnProject('Rating')}>{`+${rating}`}</div>
    </div>
      <div className={cnProject('Image')} style={ { backgroundImage: `url(${require(`../images/${imageSrc}`)})` } }>
      </div>
  </div>
);
