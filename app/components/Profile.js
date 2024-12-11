import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Profile = () => {
  
  return (
    <div>
      <div className=" text-white size-fit text-center mb-5">
        <h2 className="font-sans font-semibold text-8xl">Albin Thomas</h2>
        <p>Software Engineer at Experion Technologies</p>
        <div className="flex justify-center gap-7">
          <a href="https://github.com/albinthomas724" target="_blank" rel="noopener noreferrer"><FaGithub size={40}/></a>
          <a href="https://www.linkedin.com/in/albin-thomas-91012a1b8/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40}/></a>
          
        </div>
        <a href="https://www.google.com" target="_blank"><button className="bg-black text-white rounded p-1 m-3 font-mono">Download CV</button></a>
        
      </div>
    </div>
  );
};

export default Profile;
