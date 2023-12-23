/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'dark':"#000",
        'light':"#fff",
        'txt':"#a1a1a1",
        "txtdark":"#676767"
      },
      screens:{
        "maxlg":{"max":"1100px"},
        "maxmd":{"max":"850px"},
        "maxsm":{"max":"550px"},
        "md":{'min':"850px"}
      }
    },
  },
  plugins: [],
}
