/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: 'rgba(156, 77, 244, 1)',
        customCyan: 'rgba(183, 241, 214, 0.39)',
        customGreen: 'rgba(80, 244, 77, 1)',
        customBlue: 'rgba(0, 10, 46, 1)',
      },
      animation: {
        'linearLoad': 'linearLoadAnimation 1.4s',
      },
      keyframes: {
        linearLoadAnimation: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

