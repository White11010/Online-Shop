module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/Vue.js-Online-Shop/'
  : '/',
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
