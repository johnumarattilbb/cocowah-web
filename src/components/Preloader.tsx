import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Use an animated GIF or a CSS-based animation for the loader */}
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
  );
};

export default Preloader;
