module.exports = {
  mode: 'production',
  entry: './src/babel-transform.js',
  output: {
    filename: 'babel-transform.js'
  },
  resolve: {
    aliasFields: ['browser']
  },
  node: {
    console: false,
    global: true,
    process: true,
    __filename: 'mock',
    __dirname: 'mock',
    Buffer: true,
    setImmediate: true,
    fs: 'empty'
  }
};