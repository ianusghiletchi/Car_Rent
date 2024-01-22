import React from 'react';
import IconDiv from './BluePrints/IconDiv.jsx';
import '../scss/HIWP.scss';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

function HowItWorksPage() {
  return (
  <div className='HIWP-Div'>
    <div className='HIWP-Text shadow-lg'>
      <h1 style={{ padding: '0% 0 1% 0' }}>How It Works</h1>
      <p style={{ width: '90%', textAlign: 'center', margin: '0 auto' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet
      </p>
    </div>  
    <div className='CPB-Div'>
      <IconDiv icon={PlaceIcon} title='Lorem ipsum dolor sit' label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet' fontsize={60} bgcolor={'#ffcd0e'} />
      <IconDiv icon={CalendarMonthIcon} title='Lorem ipsum dolor sit' label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet' fontsize={60} bgcolor={'#ffcd0e'} />
      <IconDiv icon={DirectionsCarFilledIcon} title='Lorem ipsum dolor sit' label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet' fontsize={60} bgcolor={'#ffcd0e'} />
    </div>
  </div>      
  );
}

export default HowItWorksPage;