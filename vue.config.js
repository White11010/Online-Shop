module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/style.scss";
        @import "@/assets/fonts/fonts.scss";
        `,
      },
    },
  },
};
