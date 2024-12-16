"use client";
import React, { useEffect, useState } from "react";
import Skills from "../components/Skills";
import { TiltCard } from "../components/TiltCard";
import styles from "../styles/GradientSection.module.css";

const SkillSet = () => {
  const [tiltCardData, setTiltCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/tiltcardata.json"); // Ensure the correct path or API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTiltCardData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mb-7">
      <div className="text-center mt-16 mb-7">
        <span className="font-cursive text-4xl">
          My <span className="text-coolgreen font-semibold">Skills</span>
        </span>
      </div>
      <Skills />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <div className={styles.gradientBackground}>
            {/* Projects Heading */}
            <div className="text-center mt-32 pt-8">
              <span className="text-white font-semibold font-cursive text-3xl">
                Projects
              </span>
              <span className="font-cursive text-3xl ml-4">
                that I worked on
              </span>
            </div>

            {/* TiltCard Container */}
            <div className="flex flex-wrap gap-6 justify-center items-center mt-8 pb-16">
              {tiltCardData.map((card, index) => (
                <TiltCard
                  key={index}
                  coverPicture={card.coverPicture}
                  projectName={card.projectName}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillSet;
