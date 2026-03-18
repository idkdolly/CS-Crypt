import React from 'react';
import { SplitFlapText } from "../utils/SplitText"

const HomePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: 'transparent',
      color: 'white'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '20px'
      }}>
        <SplitFlapText text="CSCrypt" speed={80} />
      </div>
    </div>
  );
};

export default HomePage;
