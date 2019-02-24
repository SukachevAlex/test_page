import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Project.css';
import data from './ProjectData.json';
import { ProjectItem } from './Item/Project-Item';

const cnProject = cn('Project');

export interface IProjectProps {
  className?: string;
}

export const Project: React.SFC<IProjectProps> = (props) => {
  const projectItems = data.map((item, index) => {
    const desciption = Object.entries(item.description).map((el) => {
      return (
        <div className={cnProject('DescriptionRow')} key={el[1][0]}>
          {el[1][0] && <div className={cnProject('Label')}>{el[1][0]}</div>}
          <div className={cnProject('Text')}>{el[1][1]}</div>
        </div>
      )
  });

    return (
      <ProjectItem
        key={item.name}
        name={item.name}
        rating={item.rating}
        description={desciption}
        imageSrc={item.imageSrc}
        type={item.type}
        bgColor={item.bgColor}
        align={index !== 0 && index % 2 === 0 ? 'left' : ''}
      />
    )
  });

  return (
    <div className={cnProject()}>
      {projectItems}
    </div>
  );
};
