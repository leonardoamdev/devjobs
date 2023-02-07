import React from 'react';
import Toggle from './Toggle';
import { THEMES } from 'src/constants';

const ColorSchemeToggle = ({ theme, onChange }) => {
  return (
    <div className="flex items-center">
      <img
        className="h-[18.6px] w-5"
        src="/assets/desktop/icon-sun.svg"
        alt="light scheme"
      />
      <Toggle
        className="mx-4"
        isChecked={theme === THEMES.DARK}
        onToggle={onChange}
      />
      <img
        className="h-3 w-3"
        src="/assets/desktop/icon-moon.svg"
        alt="dark scheme"
      />
    </div>
  );
};

export default ColorSchemeToggle;
