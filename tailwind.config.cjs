// eslint-disable-next-line @typescript-eslint/no-var-requires
const tw = require('./dist/tailwind')

const config = tw.getConfig()

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/react/**/*.{js,jsx,ts,tsx}'],
  ...config,
}
