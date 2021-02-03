import { DataGridProps, RowId } from '@material-ui/data-grid'
import { EditorMode } from '../enums/common.enums'

export type DrawerProps = {
  opened: boolean
  onToggle: () => void
}

export type DrawerListOptionProps = {
  label: string
  to: string
  icon: React.ReactNode
}

export type TableProps = DataGridProps & {
  onEdit: (id: string) => Promise<void> | void
  onDelete: (ids: Array<string>) => Promise<void> | void
  selected: Array<RowId>
  setSelected: React.Dispatch<React.SetStateAction<Array<RowId>>>
}

export type EditorLayoutButtonsProps = {
  mode: EditorMode
  onSave: () => Promise<void> | void
  onDelete: () => Promise<void> | void
}

export type EditorLayoutProps = EditorLayoutButtonsProps & {
  title: string
}

export type BoundEditorLayoutProps = Pick<EditorLayoutProps, 'title' | 'mode'>

export type TableToolbarButtonsProps = Omit<
  TableProps,
  keyof DataGridProps | 'onEdit'
> & {
  selected: Array<RowId>
}
