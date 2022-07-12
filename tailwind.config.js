/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: { //MantineとTailwindの相性問題解決用
    preflight: false,
  },
}
