import React from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaPoo } from 'react-icons/fa';
import { BiLogoReact } from 'react-icons/bi';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
        <SideBarIcon css='dark:hover:bg-discord_blue dark:text-white' icon={<BiLogoReact size="28" />} />
        <Divider />
        <SideBarIconServer icon={<div className="server-image bg-server" text="Portfolio"/>} />
        <SideBarIconServer icon={<div className="server-image bg-linkedin"  />} text="Linkedin" link="https://www.linkedin.com/in/firas-chalbi/"/>
        <SideBarIconServer icon={<div className="server-image bg-github" />} text="Github" link="https://github.com/FirasChalbi"/>
        <SideBarIconServer icon={<div className="server-image bg-email"/>} text="Email" link="mailto:firaschalbi0@gmail.com"/>
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text, css }) => (
  <div className={`sidebar-icon group ${css}`}>
    {icon}
  </div>
);

const SideBarIconServer = ({ icon, text, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="sidebar-link">
    <div className='sidebar-icon-server group'>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  </a>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
