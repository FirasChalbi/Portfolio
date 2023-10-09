import TopNavigation from "./TopNavigation";
import React, { useState, useEffect } from 'react';
import chatMessages from './Data'; 
import { BsPlusCircleFill } from 'react-icons/bs';

import { Book, Chevron, Hashtag, Speakerphone } from "../images/index";


const Content = ({ selectedWord }) => {
  const selectedProjectMessages = chatMessages.find(
    (project) => project.project === selectedWord
  );
  
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Find the selected project's data based on selectedWord
    const selectedProjectMessages = chatMessages.find(
      (project) => project.project === selectedWord
    );

    // Update the images state when selectedProjectMessages changes
    if (selectedProjectMessages) {
      setImages(selectedProjectMessages.img);
    }
  }, [selectedWord]);

    console.log(selectedWord)
    console.log(chatMessages[0].link)
    return (
      <div className='content-container h-screen'>
        
        <TopNavigation page="Welcome"/>
        <div className='content-list flex items-start m-5' >          
        <Hashtag className="w-[50px] h-[50px] dark:text-white dark:bg-gray-800 bg-gray-500 text-white rounded-full p-9 mt-4 " />
        <p className="text-[35px] dark:text-white text-gray-700 font-bold">Welcome to #{selectedWord}!</p>
        <p className="text-1xl dark:text-gray-400 text-gray-800">This the start of the #{ selectedWord } channel.</p>

        <div class="grid grid-cols-3 gap-4 mt-10 w-full">
          <div class="col-span-1 h-[1px] bg-gray-500 mt-2 mr-[-140px] ml-10"></div>
          
          <span class="dateText col-span-1 text-center text-gray-600 text-xs mr-[-100px] ml-[-100px]">October 7, 2023</span>
        
          <div class="col-span-1 h-[1px] bg-gray-500 mt-2 ml-[-140px] mr-10"></div>
        </div>

        {selectedProjectMessages && selectedProjectMessages.messages.map((message, index) => (
          <Post
          name='Firas Chalbi'
          timestamp='1 hour ago'
          text={message}
          imageUrls={index === 4 ? images : undefined}
          link={selectedProjectMessages.link}
        />
          ))}
        </div>
        <BottomBar/>
      </div>
    );
  };


  
  const Post = ({ name, timestamp, text, imageUrls, link }) => {
    const seed = Math.round(Math.random() * 100);
  
    return (
      <div className="post ml-[-65px] relative group">
        <div className="avatar-wrapper">
          <img
            src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
            alt=""
            className="avatar"
          />
        </div>
  
        <div className="post-content ml-[-70px]">
          <p className="post-owner">
            {name}
            <small className="timestamp">{timestamp}</small>
          </p>
          <div className="post-images grid grid-cols-3 gap-2">
            {imageUrls &&
              imageUrls.map((imageUrl, index) => (
                <div
                  key={index}
                  className="post-image-container relative group hover:scale-150 hover:z-10 transition-transform duration-300 ease-in-out"
                >
                  <img
                    src={imageUrl}
                    alt={`Image ${index}`}
                    className="post-image"
                  />
                </div>
              ))}
          </div>
          <p className="post-text">
            {/* Render the text with a clickable link */}
            {text.includes("[here]") ? (
              <span>
                {text.split("[here]")[0]}
                <a className="font-bold underline"
                  href={link} // Use the link prop as the href
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                {text.split("[here]")[1]}
              </span>
            ) : (
              text
            )}
          </p>
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
  
  export default Content;