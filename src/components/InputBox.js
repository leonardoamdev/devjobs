import React, { forwardRef } from 'react';
import classNames from 'classnames';

const InputBox = forwardRef(
  (
    {
      className = '',
      iconStyle = '',
      inputStyle = '',
      iconSrc,
      value,
      placeholder,
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        className={classNames('px-0 sm:px-4 py-2 flex items-center', className)}
      >
        {iconSrc && (
          <img
            className={classNames('fill-primary', iconStyle)}
            src={iconSrc}
            alt="input ico"
          />
        )}
        <input
          className={classNames(
            'bg-transparent text-base text-black dark:text-white flex-1 focus:outline-none',
            inputStyle,
          )}
          placeholder={placeholder}
          value={value}
          ref={ref}
          {...rest}
        />
      </div>
    );
  },
);

export default InputBox;
