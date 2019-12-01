export function css(strings: TemplateStringsArray, ...values: any[]) {
  const lastIndex = strings.length - 1

  return (
    strings.slice(0, lastIndex).reduce((acc, str, i) => {
      return acc + str + values[i]
    }, '') + strings[lastIndex]
  )
}
