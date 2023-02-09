import React, { createContext, useEffect, useState } from 'react';
import _ from 'lodash';
import { THEMES } from 'src/constants';

const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultSettings = {
  theme: isSystemDark ? THEMES.DARK : THEMES.LIGHT,
};

const defaultFilter = {
  query: '',
  location: '',
  isFullTimeOnly: false,
};

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData);
    }
  } catch (err) {
    console.error(err);
  }

  return settings;
};

export const storeSettings = settings => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

const SettingsContext = createContext({
  settings: defaultSettings,
  filter: defaultFilter,
  saveSettings: () => {},
  saveFilter: () => {},
});

export const SettingsProvider = ({ settings, filter, children }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings,
  );

  const [currentFilter, setCurrentFilter] = useState(filter || defaultFilter);

  const setTheme = theme => {
    if (theme === THEMES.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSaveSettings = (update = {}) => {
    const mergedSettings = _.merge({}, currentSettings, update);

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
    setTheme(mergedSettings.theme);
  };

  const handleSaveFilter = (update = {}) => {
    setCurrentFilter(update);
  };

  useEffect(() => {
    const restoredSettings = restoreSettings();

    const defaultTheme = restoredSettings?.theme
      ? restoredSettings?.theme
      : !restoredSettings?.theme && isSystemDark
      ? THEMES.DARK
      : THEMES.LIGHT;

    setCurrentSettings({ theme: defaultTheme });
    setTheme(defaultTheme);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        filter: currentFilter,
        saveSettings: handleSaveSettings,
        saveFilter: handleSaveFilter,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
