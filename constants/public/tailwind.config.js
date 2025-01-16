tailwind.config = {
  // variants: {
  // 	scrollbar: ['rounded']
  // },
  plugins: [
    // require('tailwind-scrollbar')({ nocompatible: true }),

    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar": {
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#FA6B04",
            "border-radius": "5px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#FA6B04",
          },
        },
        ".scrollbarmain": {
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#FA6B04",
            "border-radius": "5px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#FA6B04",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],

  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(-30deg, #f57f20, #d62b08 100%)",
      },

      colors: {
        main: "#313131",
        xam1: "#C8C9CE",
      },
      fontFamily: {
        main: ["Quicksand", "sans-serif"],
        sub1: ["Agbalumo", "serif"],
      },
      backgroundImage: {
        section7: "linear-gradient(to bottom, white 50%, #0000001A 50%)",
      },
    },
  },
};
// Kiểm tra xem 'module' có tồn tại không (Node.js environment)
if (typeof module !== "undefined" && module.exports) {
  module.exports = tailwind.config;
} else {
  // Trình duyệt environment
  window.tailwind.config = tailwind.config;
}
