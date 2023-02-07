const plugin = require('tailwindcss/plugin');

const customColors = {
  violet: '#5964E0', // primary
  darkGrey: '#6E8098', // secondary
  lightViolet: '#939BF4',
  veryDarkBlue: '#19202D',
  gray: '#9DAEC2',
  lightGrey: '#f4f6f8',
  midnight: '#121721',
};

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1540px',
    },
    extend: {
      backgroundColor: {
        dark: customColors.midnight,
        'dark-light': customColors.veryDarkBlue,
        light: customColors.lightGrey,
        'primary-light': customColors.lightViolet,
      },
      backgroundImage: {
        'header-lg': "url('../public/assets/desktop/bg-pattern-header.svg')",
        'header-sm': "url('../public/assets/tablet/bg-pattern-header.svg')",
        'header-xs': "url('../public/assets/mobile/bg-pattern-header.svg')",
      },
      colors: {
        primary: customColors.violet,
        secondary: customColors.darkGrey,
        black: customColors.veryDarkBlue,
        grey: customColors.darkGrey,
      },
    },
    fontFamily: {
      kumbh: 'Kumbh Sans Regular',
      'kumbh-black': 'Kumbh Sans Black',
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addComponents({
        '.container': {
          width: '100%',
          [`@media (min-width: ${theme('screens.xl')})`]: {
            maxWidth: '1110px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          [`@media (max-width: ${theme('screens.xl')})`]: {
            marginLeft: theme('spacing.10'),
            marginRight: theme('spacing.10'),
          },
          [`@media (max-width: ${theme('screens.sm')})`]: {
            marginLeft: theme('spacing.6'),
            marginRight: theme('spacing.6'),
          },
        },
        '.jd-container': {
          width: '100%',
          maxWidth: '730px',
          [`@media (min-width: ${theme('screens.xl')})`]: {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          [`@media (max-width: ${theme('screens.xl')})`]: {
            marginLeft: theme('spacing.10'),
            marginRight: theme('spacing.10'),
          },
          [`@media (max-width: ${theme('screens.sm')})`]: {
            marginLeft: theme('spacing.6'),
            marginRight: theme('spacing.6'),
          },
        },
      });
      addBase({
        body: {
          fontFamily: theme('fontFamily.kumbh'),
        },
        h1: {
          fontFamily: theme('fontFamily.kumbh-black'),
          fontSize: '28px',
        },
        h2: {
          fontFamily: theme('fontFamily.kumbh-black'),
          fontSize: theme('text.2xl'),
        },
        'li span': {
          position: 'relative',
          left: theme('spacing.6'),
        },
        'ul.list-decimal li::marker': {
          color: theme('colors.primary'),
          fontFamily: theme('fontFamily.kumbh-black'),
        },
      });
    }),
  ],
};
