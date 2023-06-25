import React, { useState, useEffect } from 'react';

const MovingHeadings = () => {
  const headings = ['Vishnu', 'Layana', 'Heading 3', 'Heading 4'];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 2000); // Change the interval duration (in milliseconds) as per your needs

    return () => clearInterval(interval);
  }, []);

  return <h1>{headings[currentHeadingIndex]}</h1>;
};

export default MovingHeadings;
