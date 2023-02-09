import React from 'react';
import { Link } from 'react-router-dom';
import ColorSchemeSwitch from 'src/components/ColorSchemeSwitch';
import { THEMES } from 'src/constants';
import useSettings from 'src/hooks/useSettings';

const Header = () => {
  const { settings, saveSettings } = useSettings();

  const handleChangeTheme = isChecked => {
    saveSettings({ theme: isChecked ? THEMES.DARK : THEMES.LIGHT });
  };

  return (
    <header className="w-full bg-header-xs sm:bg-header-sm md:bg-header-lg bg-no-repeat bg-cover h-[136px] sm:h-[161px] top-0 fixed flex justify-center z-10">
      <div className="container">
        <div className="flex justify-between items-center h-[120px]">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>
          <ColorSchemeSwitch
            theme={settings.theme}
            onChange={handleChangeTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
