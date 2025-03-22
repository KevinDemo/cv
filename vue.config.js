module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cv/'  // Updated to match your repository name 'cv'
    : '/',
  outputDir: 'dist'
}