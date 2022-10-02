module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: ['light', 'pastel'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#FF7500',
        'grey-scale': {
          '03': '#999999',
          '04': '#CCCCCC',
          '06': '#EDEDED',
        },
      },
      fontSize: {
        'content-title': ['32px', { lineHeight: '48px', fontWeight: 700 }],
        'content-subtitle': ['24px', { lineHeight: '36px', fontWeight: 700 }],
        'component-title': ['20px', { lineHeight: '36px', fontWeight: 700 }],
      },
    },
  },
};
