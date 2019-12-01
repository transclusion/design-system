'use strict'

module.exports = {
  components: require.resolve('./dist/cjs/components'),
  outputPath: './dist/playroom',
  title: 'Transclusion UI',
  themes: './playroom/themes.js',
  frameComponent: './playroom/frame.js',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: false,
  exampleCode: `
    <Button padding="s">
      Hello World!
    </Button>
  `
}
