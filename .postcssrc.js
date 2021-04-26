// ESM - browser 환경(import / export)
// CommonJS - Node.js 환경(require / module.exports)

// ESM
// import autoprefixer from "autoprefixer"
// export {
//   plugins: [
//     autoprefixer
//   ],
// }

// CommonJS
// const autoprefixer = require("autoprefixer");
// module.exports = {
//   plugins: [autoprefixer],
// };

// CommonJS refactoring
module.exports = {
  plugins: [require("autoprefixer")],
};
