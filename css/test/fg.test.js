const {fgCompileCss, fgCompileClassName} = require('../src/fg')

const theme = {
  fg: {
    '1': '#000',
    '2': '#222',
    '3': '#444',
    '4': '#666'
  }
}

describe('fg', () => {
  it('...', () => {
    const css = fgCompileCss(theme)

    expect(css).toContain('.sn-fg\\:1{color:#000}')
  })

  it('should build class name', () => {
    expect(fgCompileClassName(theme, {fg: 1})).toBe('sn-fg:1')
  })
})
