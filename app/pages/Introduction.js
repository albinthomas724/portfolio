import React from "react";
import Profile from "../components/Profile";

const Introduction = () => {
  return (
    <div>
      <div className=" flex justify-center items-end h-[600px] text-center" style={{
        backgroundImage: "url('portbannerb.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        
      }}>
        <Profile />
      </div>
    </div>
  );
};

export default Introduction;
