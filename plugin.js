import plugin from "tailwindcss/plugin";

const retlanPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    ".retro-font": {
      fontFamily: "'Press Start 2P', cursive",
      letterSpacing: "1px",
    },
  });
});

export default retlanPlugin;
