export function onChange<T = string>(fn: (value: T) => void) {
  return function (event: React.ChangeEvent<HTMLInputElement>) {
    fn(event.target.value as any)
  }
}

export function onSelect(fn: (value: string) => void) {
  return (event: React.ChangeEvent<{ value: unknown }>) => {
    fn(String(event.target.value))
  }
}
