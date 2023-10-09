import React from "react";
import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from 'react-icons/bs';
import fc from '../images/fc1.webp'

const WelcomeContent = () => {
  return (
    <div className='content-container h-screen'>
      <TopNavigation/>
      
      <div className='content-list '>          
        <div className="flex align-center text-[32px] leading-10 text-[#949BA4] font-bold text-center mt-14 mb-2">
          <p>Welcome to</p>
          <p class="m-0 ml-2 dar:text-white text-gray-800 dark:text-white">My Portfolio</p>

        </div>
        <p className="text-1xl dark:text-[#B5BAC1] text m-1">This is the beginning of the server.</p>
        
        <div class="grid grid-cols-3 gap-4 mt-10 w-full">
          <div class="col-span-1 h-[1px] bg-gray-500 mt-2 mr-[-140px] ml-10"></div>
          
          <span class="dateText col-span-1 text-center text-gray-600 text-xs mr-[-100px] ml-[-100px]">October 7, 2023</span>
        
          <div class="col-span-1 h-[1px] bg-gray-500 mt-2 ml-[-140px] mr-10"></div>
        </div>
        <Post
            name='Firas Chalbi'
            timestamp='1 hours ago'
            text={`Hey there! 👋 Welcome to my portfolio.`}
          />
        <Post
            name='Firas Chalbi'
            timestamp='1 hours ago'
            text={`I'm Firas Chalbi, a web developer with a knack for crafting digital experiences using technologies like React.js, Node.js, and MongoDB. Excited to share my work and experiences with you.`}
          />
          <Post
            name='Firas Chalbi'
            timestamp='1 hours ago'
            text={`I've been coding since high school, working on a wide range of projects that have challenged and inspired me. My goal? To create meaningful and impactful solutions that leave a lasting impression.`}
          />
          <Post
            name='Firas Chalbi'
            timestamp='1 hours ago'
            text={`Curious about what's here?`}
          />
          <Post
            name='Firas Chalbi'
            timestamp='1 hours ago'
            text={`Check out the project channels below! 🚀`}
          />
        
        </div>
      <BottomBar />
    </div>
  );
};



const AnnouncementContent = () => {
  return (
    <div className='content-container h-screen'>
        <TopNavigation/>
        Announcement
        <BottomBar />
      
    </div>
  );
};



const Post = ({ name, timestamp, text }) => {
  
  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post ml-[-90px]'}>
      <div className='avatar-wrapper'>
        <img src={fc} alt='' className='avatar' />
      </div>

      <div className='post-content ml-[-70px]'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};


const BottomBar = () => (
    <div className='bottom-bar ml-3'>
      <PlusIcon />
      <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
    </div>
    
  );

  const PlusIcon = () => (
    <BsPlusCircleFill
      size='22'
      className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
    />
  );

export { WelcomeContent, AnnouncementContent };
