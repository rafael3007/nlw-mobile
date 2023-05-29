const { getDefaultConfig } = require('metro-config')
const { resolve } = require('path')

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: [...assetExts, 'svg'],
      sourceExts: [...sourceExts, 'svg', 'tsx'],
    },
  }
})()
