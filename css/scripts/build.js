'use strict'

const cssnano = require('cssnano')
const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const postcssPresetEnv = require('postcss-preset-env')
const {css, baseCss, themeCss, defaultTheme} = require('../')

const DIST_PATH = path.resolve(__dirname, '../dist')

function build(opts) {
  const postcssPlugins = [
    postcssPresetEnv({
      browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
    }),
    opts.minify && cssnano()
  ].filter(Boolean)

  return new Promise((resolve, reject) => {
    postcss(postcssPlugins)
      .process(opts.css, {
        from: undefined,
        to: opts.path
      })
      .then(result => {
        fs.writeFile(opts.path, result.css, err => {
          if (err) {
            reject(err)
            return
          }

          console.log(opts.path)
          resolve()
        })
      })
      .catch(reject)
  })
}

Promise.all([
  build({
    css: css(defaultTheme),
    path: path.resolve(DIST_PATH, 'transclusion.css')
  }),
  build({
    css: css(defaultTheme),
    minify: true,
    path: path.resolve(DIST_PATH, 'transclusion.min.css')
  }),
  build({
    css: baseCss(),
    path: path.resolve(DIST_PATH, 'transclusion-base.css')
  }),
  build({
    css: baseCss(),
    minify: true,
    path: path.resolve(DIST_PATH, 'transclusion-base.min.css')
  }),
  build({
    css: themeCss(defaultTheme),
    path: path.resolve(DIST_PATH, 'transclusion-default-theme.css')
  }),
  build({
    css: themeCss(defaultTheme),
    minify: true,
    path: path.resolve(DIST_PATH, 'transclusion-default-theme.min.css')
  })
]).catch(err => {
  console.log(err)
  process.exit(1)
})
