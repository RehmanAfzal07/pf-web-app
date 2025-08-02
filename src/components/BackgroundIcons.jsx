// src/BackgroundIcons.jsx
import { FaReact, FaGithub, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // Importing icons from react-icons
import { SiBootstrap,  SiReactrouter, SiRedux, SiTypescript } from 'react-icons/si';
import '../css/BackgroundIcons.css'
import { TbBrandNextjs } from 'react-icons/tb';

const BackgroundIcons = () => {
  return (
    <div className="background-icons">
      <FaReact className="icon react" />
      <FaGithub className="icon github" />
      <FaCss3Alt className="icon css" />
      <FaJsSquare className="icon javascript" />
      <SiBootstrap className="icon bootstrap" />
      <SiRedux className='icon redux'/>
      <SiReactrouter className='icon router'/>
      <SiTypescript className='icon typescript'/>
      <TbBrandNextjs className='icon nextjscript' />
    </div>
  );
};

export default BackgroundIcons;
