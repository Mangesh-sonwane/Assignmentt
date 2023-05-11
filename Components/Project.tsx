'use client';

import { Typography } from 'antd';
import Cprofile from './Cprofile';

const Project = () => {
  const { Text } = Typography;
  const items = [
    {
      key: '1',
      label: `Basic Info`,
    },
    {
      key: '2',
      label: `Files`,
    },
    {
      key: '3',
      label: `Mutual Action Plan`,
    },
    {
      key: '4',
      label: `Contact`,
    },
    {
      key: '5',
      label: `Internal Actions`,
    },
  ];

  return (
    <div className='project'>
      <div className='main'>
        <Text className='title'> Project Scope Recap</Text>
        <div className='progress-slot'>
          <div className='info'>
            <Text className='title'>Mutual Action Plan</Text>
            <Text className='percnt'>3%</Text>
          </div>
          <div className={'dots'}>
            {Array.from({ length: 17 }).map((_, i) => (
              <div key={i} className={'item'} />
            ))}
          </div>
        </div>
      </div>
      {/* Menu Options  */}
      <div className={'Menu'}>
        {items.map((item) => (
          <div key={item.key} className={'menuItem'}>
            {item.label}
          </div>
        ))}
      </div>
      {/*  */}
      <div>
        <Cprofile />
      </div>
    </div>
  );
};

export default Project;
