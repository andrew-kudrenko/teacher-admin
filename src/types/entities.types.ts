export type ID<T extends object, U = string> = { id: U } & T

export type MaterialsCategory = { title: string }

export type Material = {
  title: string
  link: string
  category: string
}

export type MaterialsPage = {
  materials: Array<Material>
}
