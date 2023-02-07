import classNames from 'classnames';
import React from 'react';

const Toggle = ({
  className,
  id,
  label,
  isChecked = false,
  onToggle,
  ...rest
}) => {
  return (
    <label
      className={
        'relative inline-flex items-center cursor-pointer ' + className
      }
    >
      <input
        type="checkbox"
        id={id}
        className="sr-only peer"
        defaultChecked={isChecked}
        onChange={onToggle}
        {...rest}
      />
      <div
        className={classNames(
          "w-12 h-6 bg-white peer-focus:ring-3.5 rounded-full peer after:content-[''] after:absolute after:top-[5px] after:left-[5px] after:bg-primary after:rounded-full after:h-3.5 after:w-3.5 after:transition-all hover:after:bg-primary-light",
          { 'peer-checked:after:translate-x-[170%]': isChecked },
        )}
      ></div>
      {label && (
        <span className="ml-3 text-sm font-medium text-black">{label}</span>
      )}
    </label>
  );
};

export default Toggle;
