import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Typography } from '@material-ui/core'
import { ColDef, RowId } from '@material-ui/data-grid'
import { ID, Material, MaterialsCategory } from '../../types/entities.types'
import { Table } from '../../components/Table/Table'
import { apiUrl } from '../../components/helpers/api.helpers'

const columns: Array<ColDef> = [
  { field: 'title', headerName: 'Название', flex: 0.4 },
  { field: 'category', headerName: 'Категория', flex: 0.3 },
  { field: 'link', headerName: 'Ссылка', flex: 0.3 },
]

const url = `${apiUrl}/materials`

export const MaterialsPage: React.FC = () => {
  const [rows, setRows] = useState<Array<ID<Material>>>([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState<Array<RowId>>([])

  const editingId = rows.find(r => r.id === selected[0])?.id
  const deletingIds = rows.filter(r => selected.includes(r.id)).map(r => r.id)

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

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setLoading(true)

    const materials: Array<ID<Material>> =
      (await axios.get(`${apiUrl}/materials`)).data ?? []

    const categories: Array<ID<MaterialsCategory>> =
      (await axios.get(`${apiUrl}/materials/categories`)).data ?? []

    setRows(
      materials.map(m => ({
        ...m,
        category: categories.find(c => c.id === m.category)?.title || '',
      }))
    )

    setLoading(false)
  }

  return (
    <>
      <Typography variant="h5" gutterBottom align="center">
        {'Материалы'}
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
