import classNames from 'classnames';
import React from 'react';

const CheckBox = ({
  className = '',
  id,
  label,
  isChecked = false,
  onChange,
  ...rest
}) => {
  return (
    <div className={classNames(className, 'flex items-center')}>
      <div className="relative flex items-center">
        {isChecked && (
          <img
            className="h-[9px] w-3 absolute left-1.5 top-2 cursor-pointer"
            src="/assets/desktop/icon-check.svg"
            alt="checkbox"
          />
        )}
        <input
          id={id}
          type="checkbox"
          className={classNames('w-6 h-6 rounded-[3px]', {
            'bg-primary': isChecked,
            'bg-black/10 dark:bg-white/10 hover:bg-primary/50 dark:hover:bg-primary/50':
              !isChecked,
          })}
          onChange={onChange}
          {...rest}
        />
      </div>
      {label && (
        <label
          htmlFor={id}
          className="ml-4 text-base text-black font-kumbh-black dark:text-gray-300"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
