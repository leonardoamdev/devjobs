import classNames from 'classnames';
import React from 'react';

const CompanyLogo = ({
  className,
  company,
  logoSrc,
  bgColor,
  isLarge = false,
}) => {
  return (
    <div
      className={classNames(className, 'flex justify-center items-center', {
        'rounded-2xl w-[50px] h-[50px] self-center': !isLarge,
        'rounded-bl-md h-[140px] w-[140px]': isLarge,
      })}
      style={{
        background: bgColor,
      }}
    >
      <img src={logoSrc} alt={`${company} logo`} />
    </div>
  );
};

export default CompanyLogo;
