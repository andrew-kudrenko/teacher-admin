import { useParams } from 'react-router-dom'

export function useIdParam(): string | undefined {
  const { id } = useParams<{ id?: string }>()

  return id
}
