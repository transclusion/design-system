export function classNames(...args: any[]) {
  return args.filter(Boolean).join(' ') || undefined
}

interface CompPathProps {
  'data-c'?: string
}

export function getCompPath(compName: string, props: CompPathProps = {}) {
  return [compName, props['data-c']].filter(Boolean).join('<')
}
