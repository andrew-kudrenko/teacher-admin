import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Typography } from '@material-ui/core'
import { ColDef, RowId } from '@material-ui/data-grid'
import { ID, MaterialsCategory } from '../../../types/entities.types'
import { Table } from '../../../components/Table/Table'
import { apiUrl } from '../../../components/helpers/api.helpers'

const columns: Array<ColDef> = [
  { field: 'title', headerName: 'Название', flex: 1 },
]

const url = `${apiUrl}/materials/categories`

export const MaterialsCategoriesPage: React.FC = () => {
  const [selected, setSelected] = useState<Array<RowId>>([])
  const [rows, setRows] = useState<Array<ID<MaterialsCategory>>>([])
  const [loading, setLoading] = useState(false)

  const editingId = rows.find(r => r.id === selected[0])?.id
  const deletingIds = rows.filter(r => selected.includes(r.id)).map(r => r.id)

  useEffect(() => {
    loadData()
  }, [])

  async function onEdit() {
    await axios.patch(
      `${url}/${editingId}`,
      rows.find(r => r.id === editingId)
    )
  }

  async function onDelete() {
    for (let id of deletingIds) {
      await axios.delete(`${url}/${id}`)
    }

    await loadData()
  }

  async function loadData() {
    setLoading(true)

    const { data: categories } = await axios.get(url)

    setRows(categories)
    setLoading(false)
  }

  return (
    <>
      <Typography variant="h5" gutterBottom align="center">
        {'Категории материалов'}
      </Typography>
      <Box height="70vh">
        <Table
          rows={rows}
          columns={columns}
          onEdit={onEdit}
          onDelete={onDelete}
          loading={loading}
          selected={selected}
          setSelected={setSelected}
        />
      </Box>
    </>
  )
}
