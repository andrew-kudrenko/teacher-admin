import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { TableProps } from '../../types/components.types'
import { TableToolbarButtons } from './TableToolbarButtons'
import { localeText } from './locale-text'

export const Table: React.FC<TableProps> = props => {
  const { setSelected } = props

  return (
    <>
      <TableToolbarButtons {...props} />
      <DataGrid
        {...props}
        checkboxSelection
        showToolbar
        localeText={localeText}
        onSelectionChange={newSelection => {
          setSelected(newSelection.rowIds)
        }}
      />
    </>
  )
}
