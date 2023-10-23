import React, { useState } from "react";
import Content from "./Content";
import { Book, Chevron, Hashtag, Speakerphone } from "../images/index";
import fc from '../images/fc1.webp';
import { FaHeadphones } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import {WelcomeContent, AnnouncementContent} from './Welcome'

const Projects = ['Stay Alive', 'ProjectX', 'Flouci Payment Integration', 'Virgule', 'Web Scrapping', 'Chat App', 'Workout Buddy', 'Todo App', 'Portfolio', 'Email Sender'];
const questions = ['Soon' , 'CV'];

const ServerImage = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedContent, setSelectedContent] = useState("Welcome");

  // Function to handle word selection
  const handleWordSelection = (word) => {
    setSelectedWord(word);
    setSelectedContent(null); // Reset selected content
  };

  // Function to handle button click for Welcome content
  const handleWelcomeButtonClick = () => {
    setSelectedContent("Welcome");
  };

  // Function to handle button click for Announcement content
  const handleAnnouncementButtonClick = () => {
    setSelectedContent("Announcement");
  };
  let contentToRender;
  if (selectedContent === "Welcome") {
    contentToRender = <WelcomeContent />;
  } else if (selectedContent === "Announcement") {
    contentToRender = <AnnouncementContent />;
  } else {
    contentToRender = <Content selectedWord={selectedWord} />;
  }

  return (
    <div className="flex w-full">
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="channel-bar xl:flex flex-col justify-between w-[18rem] shrink-0  h-screen top-0"
      >
        <div className="p-4">
          <ChannelBlock />
          <hr />
          <div className="mt-4 ">
            <div className="flex text-white/50 items-center text-[20px]">
              <button className="flex items-center hover:bg-gray-400 hover:dark:bg-gray-700 hover:text-white focus:bg-gray-300 focus:dark:bg-gray-900 focus:text-white  w-full py-1 rounded-[0.4rem] font-semibold duration-100 ease-out  "
              onClick={handleWelcomeButtonClick}>
                <div className="text-[18px]">
                  <Book className="w-5 h-5 text-gray-500" />
                </div>
                <p className="ml-2  text-[15px] text-gray-800 dark:text-white">Welcome</p>
              </button>
            </div>
            <div className="flex text-white/50 items-center text-[20px]">
              <button className="flex items-center hover:bg-gray-400 hover:dark:bg-gray-700 hover:text-white focus:bg-gray-300 focus:dark:bg-gray-900 focus:text-white  w-full py-1 rounded-[0.4rem] font-semibold duration-100 ease-out "
              onClick={handleAnnouncementButtonClick}>
                <div className="text-[18px]">
                  <Speakerphone className="w-5 h-5 text-gray-500" />
                </div>
                <p className="ml-2  text-[15px] text-gray-800 dark:text-white">announcement</p>
              </button>
            </div>
          </div>
          <Dropdown header='Projects' selections={Projects} onSelect={handleWordSelection} />
          <Dropdown header='Questions' selections={questions} onSelect={handleWordSelection} />
        </div>
        <div className="dark:bg-[#292b2f] bg-gray-300 h-[5rem] flex text-white/80 items-center px-4 justify-between">
          <div className="flex items-center cursor-pointer">
            <img
              src={fc}
              alt="avatar"
              className="w-[48px] h-[48px] bg-no-repeat bg-center bg-cover bg-white m-auto rounded-[24px]"
            />
            <div className="pl-2">
              <p className=" text-gray-700 dark:text-gray-400">Firas Chalbi</p>
              <p className="text-[14px] text-gray-700 dark:text-gray-400">#2001</p>
            </div>
          </div>
          <div className=" flex space-x-3 text-[20px]">
            <MdKeyboardVoice className="text-gray-700 dark:text-gray-100"/>
            <FaHeadphones className="text-gray-700 dark:text-gray-100"/>
            <IoMdSettings className="text-gray-700 dark:text-gray-100"/>
          </div>
        </div>
      </div>
      
      {contentToRender}

    </div>
  );
};

const Dropdown = ({ header, selections, onSelect }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mt-4">
      <div className="flex text-white/50 items-center text-[20px]">
        <button
          className="flex items-center hover:text-white  focus:text-white w-full py-1 rounded-[0.4rem] font-semibold duration-100 ease-out"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="text-[18px] text-gray-500">
            {expanded ? (
              <Chevron className="w-5 h-5 " />
            ) : (
              <Chevron className="w-5 h-5 -rotate-90" />
            )}
          </div>
          <p className="ml-2 text-[15px] text-gray-500 ">{header}</p>
        </button>
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => (
          <TopicSelection
            selection={selection}
            onSelect={() => onSelect(selection)}
            key={selection} // Add a unique key to each topic
          />
        ))}
    </div>
  );
};

const TopicSelection = ({ selection, onSelect }) => (
  <div className="flex text-white/50 items-center text-[20px]">
    <button
      className="flex items-center hover:bg-gray-400 hover:dark:bg-gray-700 hover:text-white focus:bg-gray-300 focus:dark:bg-gray-900 focus:text-white  w-full py-1 rounded-[0.4rem] font-semibold duration-100 ease-out "
      onClick={onSelect}
    >
      <div className="ml-4 text-[18px]">
        <Hashtag className="w-5 h-5 text-gray-500 " />
      </div>
      <p className="ml-2  text-[15px] dark:text-white text-gray-900">{selection}</p>
    </button>
  </div>
);

const ChannelBlock = () => (
  <div className="flex gap-4 items-center text-center mb-4">
    <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>

    <p className="text-gray-700 dark:text-gray-100 font-bold text-[18px]">Discord Server</p>
  </div>
);

export default ServerImage;
