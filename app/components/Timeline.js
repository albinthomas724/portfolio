"use client";
import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa'; // Import all fa icons from react-icons/fa

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [timelineData, setTimelineData] = useState([]);

  // Fetch the timeline data from the API
  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await fetch('educationdata.json'); // Replace with your actual API endpoint
        if (!response.ok) throw new Error('Failed to fetch timeline data');
        const data = await response.json();
        setTimelineData(data);
      } catch (err) {
        console.error("Error fetching timeline data:", err.message);
      }
    };

    fetchTimelineData();
  }, []);

  // Function to get the icon dynamically from the string
  const getIconComponent = (iconName) => {
    const IconComponent = FaIcons[iconName]; // Dynamically get the icon component from the FaIcons object
    return IconComponent ? <IconComponent className="text-2xl" /> : <FaIcons.FaRegCircle className="text-xl" />; // Fallback icon if not found
  };

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector(".timeline");
      if (!timeline) return; // Ensure the element exists
      const items = timeline.querySelectorAll(".timeline-item");
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          item.classList.add("animate-fadeIn");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <div className="container mx-auto px-4 py-8 ">
      
      <div className="timeline relative ">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item flex flex-col md:flex-row items-center mb-8 hover:text-blue-500 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            role="article"
            aria-label={`Timeline item: ${item.title}`}
          >
            <div className="w-full md:w-1/2 p-4 ">
              <div
                className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${activeIndex === index ? 'transform scale-105' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                tabIndex="0"
              >
                <h3 className="text-xl font-semibold mb-2 ">{item.title}</h3>
                <p className="text-gray-600 hover:font-semibold">{item.description}</p>
                {activeIndex === index && (
                  <div className="mt-4 text-sm text-gray-500 animate-fadeIn">
                    {item.additionalInfo || 'No additional info'}
                  </div>
                )}
              </div>
            </div>

            {/* Dynamically render icon from API */}
            <div className="timeline-marker flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white z-10 my-4 md:my-0">
              {getIconComponent(item.icon)}
            </div>

            <div className="w-full md:w-1/2 p-4 text-center md:text-right">
              <span className="text-lg font-bold">{item.date}</span>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Timeline;
