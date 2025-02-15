export default {
  content: [
      "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("@tailwindcss/typography")], // Make sure this is added
};
