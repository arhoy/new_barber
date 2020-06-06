import React from 'react';

const SVG = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="some path here" />
      <circle
        cx="50"
        cy="30"
        r="10"
        stroke="black"
        stroke-width="1"
        fill="red"
      />
    </svg>
  );
};

export default SVG;
