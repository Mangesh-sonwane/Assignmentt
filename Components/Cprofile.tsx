'use client';

import { Typography, Image } from 'antd';
import { HiDotsVertical, BsArrowDown } from 'react-icons/all';

const Cprofile = () => {
  const Text = Typography;
  const items = [
    {
      key: '1',
      label: `Overview`,
    },
    {
      key: '2',
      label: `Welcome`,
    },
    {
      key: '3',
      label: `Product Capabilities`,
    },
    {
      key: '4',
      label: `Customer Success Stories`,
    },
    {
      key: '5',
      label: `File Sharing`,
    },
    {
      key: '6',
      label: `Our Deck`,
    },
  ];

  return (
    <div className='profile'>
      <div className='sidebarMenu'>
        {items.map((item) => (
          <div key={item.key} className={'menuItem'}>
            {item.label}
          </div>
        ))}
      </div>
      <div className='company-profile'>
        <div className='header'>
          <Text className='title'> Company Profile</Text>
          <HiDotsVertical size={20} className={'three-dots'} />
          <div className='options'>
            <Image
              src='/assets/icons/download.svg'
              alt='download'
              width={24}
              height={24}
              preview={false}
            />
            |
            <Image
              src='/assets/icons/Hide.svg'
              alt='Hide'
              width={24}
              height={24}
              preview={false}
            />
            |
            <Image
              src='/assets/icons/Trash.svg'
              alt='Trash'
              width={24}
              height={24}
              preview={false}
            />
          </div>
        </div>
        {/* Baground */}
        <div className='background'>
          <Image
            src='/assets/images/office.png'
            alt='office'
            preview={false}
            className='image'
          />
          <div className={'banner'}>
            <Image
              src='/assets/images/wework.png'
              alt='Wework'
              preview={false}
            />
            <Text className={'title'}>
              For all the ways you work, we are here
            </Text>
          </div>
          <div className={'options'}>
            <Image
              src='/assets/images/other-options.png'
              alt='Other Options'
              preview={false}
            />
          </div>
        </div>
        <div className={'icons'}>
          <Image
            src='/assets/images/footer-icons.png'
            alt='icons'
            preview={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Cprofile;
