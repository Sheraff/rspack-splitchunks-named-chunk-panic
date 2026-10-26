export default {
  mode: 'production',
  entry: './src/index.js',
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        defaultVendors: false,
        named: { name: 'named', chunks: 'async', minSize: 0 },
      },
    },
  },
}
