module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
        fadeIn: 'fadeIn 0.5s ease-out',
        slideRight: 'slideRight 0.3s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}