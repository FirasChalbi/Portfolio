import React, { useState } from 'react';
import ChannelBar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Test from './components/Test'

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <ChannelBar />
    </div>
  );
}

export default App;
