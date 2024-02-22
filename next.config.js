/** @type {import('next').NextConfig} */
module.exports = {
  images: {
      unoptimized: true
  },
  sassOptions: {
    includePaths: ["./src/styles/"],
    prependData: `@use "base/mixins.scss" as *;@use "base/fonts.scss" as *; @import "base/variables.scss"; `,
  },
};