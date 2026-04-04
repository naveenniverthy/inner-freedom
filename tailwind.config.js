/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fdfbf8",
          100: "#f7f1e8",
          200: "#eee3d3"
        },
        sage: {
          100: "#dfe6de",
          300: "#aab8af",
          500: "#5f766b",
          700: "#2f413b"
        },
        ink: {
          900: "#21302b"
        }
      },
      boxShadow: {
        soft: "0 18px 44px rgba(40, 45, 42, 0.08)"
      },
      borderRadius: {
        shell: "2rem"
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      maxWidth: {
        reading: "68ch"
      },
      backgroundImage: {
        "soft-glow": "radial-gradient(circle at top left, rgba(202, 217, 205, 0.7), transparent 28%), radial-gradient(circle at top right, rgba(235, 224, 205, 0.75), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0))"
      }
    }
  },
  plugins: []
};
