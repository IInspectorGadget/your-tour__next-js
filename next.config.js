/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let output = ""
if(isGithubActions){
  assetPrefix = '',
  output = "export"
}

module.exports = {
  output: output,
  sassOptions: {
    includePaths: ["./src/styles/"],
    prependData: `@use "base/mixins.scss" as *;@use "base/fonts.scss" as *; @import "base/variables.scss"; `,
  },
};

