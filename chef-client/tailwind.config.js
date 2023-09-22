/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        "custom-border":
          "light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
      },
      height: {
        calc: "calc(100vh - 20rem)",
      },
      textColor: {
        "custom-text":
          "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
      },
    },
  },
  plugins: [],
};
