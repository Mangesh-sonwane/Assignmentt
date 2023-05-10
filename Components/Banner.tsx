'use client';
import { Typography, Button, Image } from 'antd';

const { Title } = Typography;

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__heading'>
        <Title className='title'>WeWork + Salesforce</Title>
        <Button size='large'>Publish/Share</Button>
      </div>
      {/* this for banner */}
      <div className='main'>
        <Image
          src='/assets/images/banner.png'
          preview={false}
          alt='Background'
          className={'img'}
        />
        <div className='wrapper'>
          <Title className='title'>
            Workspace <br />
            Proposal
          </Title>
        </div>
        <div className='brand'>
          <Image
            src='/assets/images/we-work.png'
            preview={false}
            alt='wework'
            className={'img'}
          />
          <span>+</span>
          <Image
            src='/assets/images/salesforce.png'
            preview={false}
            alt='salesforce'
            className={'img'}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
