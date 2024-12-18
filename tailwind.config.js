/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        running: ["15px", "15px"],
        breads: ["25px", "25px"],
        headers: ["65px", "65px"],
        hjort: ["44px", "44px"],
        footer_head: ["130px", "130px"],
        footer: ["40px", "40px"],
        footer_breads_mobile: ["18px", "18px"],
        footer_breads_ipad: ["30px", "30px"],
        footer_head_ipad: ["90px", "90px"],
        nav: ["230px", "230px"],
        nav_ipad: ["140px", "140px"],
        nav_mobile: ["80px", "80px"],
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(200)" },
        },
      },
      animation: {
        "program-1": "scroll 10s linear infinite",
        "program-2": "scroll 5s linear infinite",
      },
    },

    colors: {
      blue: "#E1F7FF",
      red: "#FF4125",
      mocha: "#A57865",
      grey: "#D3D3D3",
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".word-spacing-custom": {
          "word-spacing": "3.0em",
        },
        ".word-spacing-reset": {
          "word-spacing": "0.0em",
        },
      });
    },
  ],
};
