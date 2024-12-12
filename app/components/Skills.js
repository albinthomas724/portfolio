import React from 'react'
import Card from './Card'
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaJava } from "react-icons/fa";


const Skills = () => {
  return (
    <div className="flex flex-row  gap-4 justify-center">
      <Card
        Icon={FaReact}
        title="React"
       
      />
      <Card
        Icon={SiMongodb}
        title="Mongo DB"
        
      />
      <Card
        Icon={AiOutlineDotNet }
        title="DotNet"
        
      />
      <Card
        Icon={FaJava }
        title="Java"
        
      />
    </div>
  )
}

export default Skills
