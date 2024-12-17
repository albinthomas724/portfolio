// file: Hobbycard.jsx
"use client"; // For Next.js compatibility

import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa"; // Import all icons from react-icons/fa

const Hobbycard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch("hobbydata.json"); // Replace with your API endpoint
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    
    <div className="bg-gray-100 w-full flex justify-center p-4">
    {/* Flex container ensures the grid is horizontally centered */}
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center max-w-screen-lg">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                iconName={card.icon} // Pass the icon name directly from the API
              />
            ))}
          </div>
        </div>
      );
    };

const DynamicIcon = ({ iconName }) => {
  const IconComponent = FaIcons[iconName]; // Resolve the icon component dynamically

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found.`);
    return <div className="text-red-500">No Icon</div>; // Fallback for missing icons
  }

  return <IconComponent className="text-6xl " />; // Render the resolved icon
};

const Card = ({ title, subtitle,iconName }) => {
    return (
      <div
        className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
        {/* Large icon positioned bigger and center-left */}
        <div className="absolute z-10 top-1/2 right-4 -translate-y-1/2 text-[26rem] text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300">
          <DynamicIcon iconName={iconName} />
        </div>
        <div className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300">
          <DynamicIcon iconName={iconName} />
        </div>
        <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
          {subtitle}
        </p>
      </div>
    );
  };
  

export default Hobbycard;
