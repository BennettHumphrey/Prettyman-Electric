import React, { useState } from 'react';

const HoverWrapper = ({ colors, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const style = {
    backgroundColor: isHovered ? colors.textLight : colors.bgDark,
    transition: 'background-color 0.3s'
  };

  return (
    <div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default HoverWrapper;
