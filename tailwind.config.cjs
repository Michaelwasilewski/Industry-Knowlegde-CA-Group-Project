/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}', './src/js/*.js'],
  theme: {
    fontSize: {
      'body': ['18px', {
        lineHeight: '28px',
        fontWeight: '500',
      }],
      'smallHeader': ['32px', {
        lineHeight: 'leading-normal',
        fontWeight: '700',
      }],
      'mediumHeader': ['40px', {
        lineHeight: 'leading-normal',
        fontWeight: '700',
      }],
      'largeHeader': ['56px', {
        lineHeight: 'leading-normal',
        fontWeight: '700',
      }]
    },
    extend: {
      colors: {
        mediumBrown: '#7A746E',
        lightCream: '#FFF7F0',
        galacticBlue: '#755CDE',
        summerYellow: '#F6A560',
        pink: '#F39E9E',
        lightRed: '#EB7565',
        cyan: '#755CDE',
        darkPurple: '#552049'
      }
    },
  },
  plugins: [],
};
