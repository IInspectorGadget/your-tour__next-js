/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  output: "export",
  sassOptions: {
    includePaths: ["./src/styles/"],
    prependData: `@use "base/mixins.scss" as *;@use "base/fonts.scss" as *; @import "base/variables.scss"; `,
  },
};