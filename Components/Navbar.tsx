'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { Avatar, Typography, Badge } from 'antd';
import {
  FiChevronRight,
  BsSearch,
  IoNotificationsOutline,
  BsQuestionCircle,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/all';

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const { Text } = Typography;

  const openDrawer = useCallback(() => {
    setShowDrawer(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setShowDrawer(false);
  }, []);

  return (
    <nav className='navbar'>
      <Link href='/' className='logo'>
        <Image
          src='/assets/icons/Logo.svg'
          width={37.98}
          height={38}
          alt='Logo'
        />
        <FiChevronRight className='chevron' />
      </Link>
      {/* for big screen */}
      <div className='options'>
        <BsSearch size={24} />
        <Image
          src='/assets/icons/mail_inbox.svg'
          width={30}
          height={30}
          alt='inbox'
        />
        <Badge count={25}>
          <IoNotificationsOutline size={25} className='color' />
        </Badge>
        <BsQuestionCircle size={24} />
        <Avatar
          src='/assets/icons/user_image.svg'
          alt='Profile Picture'
          size={45}
        />
      </div>
      {/* for mobile  */}
      <div className='Menu'>
        <AiOutlineMenu size={24} onClick={openDrawer} />
        {showDrawer ? (
          <div className='drawer'>
            <AiOutlineClose size={20} onClick={closeDrawer} className='close' />

            <div className='user'>
              <Avatar
                src='/assets/icons/user_image.svg'
                alt='Profile Picture'
                size={45}
              />
              <div className={'userinfo'}>
                <Text className={'name'}>Jane Smith</Text>
                <Text className={'profession'}>Sales Executive</Text>
              </div>
            </div>

            <div className={'option'}>
              <BsSearch size={24} />
              <Text>Search</Text>
            </div>

            <div className={'option'}>
              <Image
                src='/assets/icons/mail_inbox.svg'
                alt='Mail Inbox'
                width={24}
                height={24}
              />
              <Text>Inbox</Text>
            </div>
            <div className={'option'}>
              <Badge count={25}>
                <IoNotificationsOutline size={25} className='color' />
              </Badge>
              <Text>Notifications</Text>
            </div>
            <div className='option'>
              <BsQuestionCircle size={24} />
              <Text>Help</Text>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
