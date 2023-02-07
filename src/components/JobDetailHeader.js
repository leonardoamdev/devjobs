import React from 'react';
import Button from './Button';
import CompanyLogo from './CompanyLogo';
import useDetectDevice from 'src/hooks/useDetectDevice';
import getDomain from 'src/utils/getDomain';

const JobDetailHeader = ({ logoBackground, company, logo, website }) => {
  const { isMobile } = useDetectDevice();

  return (
    <div className="rounded-md sm:rounded-bl-md sm:rounded-r-md bg-white dark:bg-dark-light flex flex-col text-center sm:text-left sm:flex-row sticky top-[121px] z-20 pt-[49px] pb-8 sm:p-0">
      <CompanyLogo
        className="absolute sm:static -top-6"
        bgColor={logoBackground}
        logoSrc={logo}
        isLarge={!isMobile}
      />
      <div className="flex flex-col sm:flex-row sm:justify-between items-center px-[43px] flex-1">
        <div>
          <h2 className="text-2xl text-black dark:text-white">{company}</h2>
          <p className="text-base text-secondary mt-[13px] sm:mt-0">
            {getDomain(website)}
          </p>
        </div>
        <Button
          className="mt-6 sm:mt-0"
          color="secondary"
          href={website}
          isLink
        >
          Company Site
        </Button>
      </div>
    </div>
  );
};

export default JobDetailHeader;
