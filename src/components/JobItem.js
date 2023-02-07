import React from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from './CompanyLogo';

const JobItem = ({ job }) => {
  return (
    <div className="rounded-md bg-white dark:bg-dark-light relative px-[32px] pt-[49px] pb-8 h-[228px]">
      <CompanyLogo
        className="absolute -top-[25px]"
        logoSrc={job.logo}
        company={job.company}
        bgColor={job.logoBackground}
      />
      <div className="flex flex-col h-full justify-between">
        <div>
          <p className="text-secondary text-base">
            {job.postedAt}
            <span className="text-2xl font-kumbh-black px-2">.</span>
            {job.contract}
          </p>
          <Link to={`/${job.id}`}>
            <h5 className="text-black text-xl dark:text-white font-kumbh-black pt-4 pb-3 hover:text-secondary dark:hover:text-secondary">
              {job.position}
            </h5>
          </Link>
          <span className="text-grey text-base">{job.company}</span>
        </div>
        <span className="text-primary text-sm font-kumbh-black">
          {job.location}
        </span>
      </div>
    </div>
  );
};

export default JobItem;
