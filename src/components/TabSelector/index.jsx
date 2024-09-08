import React from 'react';

const TabSelector = ({ isActive, children, onClick }) => (
  <button
    className={`group inline-flex items-center px-10 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap lg:text-lg ${
      isActive
        ? 'border-navy-blue text-navy-blue focus:outline-none focus:text-navy-blue focus:border-navy-blue font-bold'
        : 'border-transparent text-lightish-blue hover:text-lightish-blue hover:border-lightish-blue focus:text-lightish-blue focus:border-lightish-blue'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default TabSelector;
