export function onChange(fn: (value: string) => void) {
  return function (event: React.ChangeEvent<HTMLInputElement>) {
    fn(event.target.value)
  }
}

export function onSelect(fn: (value: string) => void) {
  return (event: React.ChangeEvent<{ value: unknown }>) => {
    fn(String(event.target.value))
  }
}
