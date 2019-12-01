const {paddingCompileCss, paddingCompileClassName} = require('../src/padding')

const theme = {
  space: {
    xxxxs: '0.125rem',
    xxxs: '0.375rem',
    xxs: '0.5rem',
    xs: '0.75rem',
    s: '1.25rem',
    m: '2rem',
    l: '3.25rem',
    xl: '5.25rem',
    xxl: '8.5rem',
    xxxl: '13.75rem',
    xxxxl: '22.25rem'
  },

  breakpoint: {
    xs: '320px',
    s: '640px',
    m: '960px',
    l: '1280px',
    xl: '1600px'
  }
}

describe('util/padding', () => {
  it('should compile padding', () => {
    const css = paddingCompileCss(theme)
    expect(css).toContain(`.sn-pt:xxxxs{padding-top:${theme.space.xxxxs}}`)
  })

  it('should build class name', () => {
    expect(paddingCompileClassName(theme, {paddingTop: ['s', 'm', 'l']})).toBe(
      'sn-pt:s s:sn-pt:m m:sn-pt:l'
    )
    expect(paddingCompileClassName(theme, {padding: 's'})).toBe('sn-pt:s sn-pr:s sn-pb:s sn-pl:s')
    expect(paddingCompileClassName(theme, {padding: ['xs', 's']})).toBe(
      'sn-pt:xs sn-pr:xs sn-pb:xs sn-pl:xs s:sn-pt:s s:sn-pr:s s:sn-pb:s s:sn-pl:s'
    )
  })
})
