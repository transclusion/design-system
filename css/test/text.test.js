const {textCompileCss, textCompileClassName} = require('../src/text')

const theme = {
  text: {
    '1': {fontSize: '14px'},
    '2': {fontSize: '16px'},
    '3': {fontSize: '18px'},
    '4': {fontSize: '20px'}
  }
}

describe('text', () => {
  it('...', () => {
    const css = textCompileCss(theme)

    expect(css).toContain('.sn-text\\:1{font-size:14px}')
  })

  it('should build class name', () => {
    expect(textCompileClassName(theme, {size: 1})).toBe('sn-text:1')
  })
})
