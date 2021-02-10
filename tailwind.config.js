const colors = {
    springGreen: "#A8BD3A",
    aquaTeal: "#00A3A6",
    skyBlue: "#27A0CC",
    oceanBlue: "#206095",
    nightBlue: "#003C57",
    indigoBlue: "#3C388E",
    plumPurple: "#902082",
    flamingoPink: "#DF0667",
    rubyRed: "#D0021B",
    jaffaOrange: "#FE781F",
    sunYellow: "#FBC900",
    neonYellow: "#F0F762",
    leafGreen: "#0F8243",
    black: "#222",
    grey1: "#414042",
    grey2: "#707071",
    grey3: "#BCBCBD",
    grey4: "#E2E2E3",
    grey5: "#F5F5F6",
    white: "#FFF",
}

module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true
  },
  purge: {
    content: ["./src/**/*.njk", "./src/**/*.js", "./src/**/*.svg"]
  },
  plugins: [require("tailwindcss-debug-screens")],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1440px"
    },
    fontFamily: {
      sans: ["Open Sans"]
    },
    fontSize: false,
    colors
  }
}

