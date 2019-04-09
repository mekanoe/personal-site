const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = {
  target: 'serverless',
  ...withMDX({
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      }

      return config
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  })
}
