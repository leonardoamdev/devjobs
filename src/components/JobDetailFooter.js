import React from 'react';
import Button from './Button';

const JobDetailFooter = ({ position, company }) => {
  return (
    <div className="fixed w-full bg-white dark:bg-dark-light abolute bottom-0 z-10 flex justify-center">
      <div className="jd-container flex justify-between items-center h-[96px]">
        <div className="hidden sm:flex sm:flex-col">
          <h2 className="text-xl text-black dark:text-white">{position}</h2>
          <p className="text-secondary">{company}</p>
        </div>
        <Button className="w-full sm:w-auto">Apply Now</Button>
      </div>
    </div>
  );
};

export default JobDetailFooter;
