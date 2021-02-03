import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import { EditorLayout } from '../EditorLayout'
import { BoundEditorLayoutProps } from '../../../../types/components.types'
import { onChange, onSelect } from '../../../helpers/form.helpers'
import { apiUrl } from '../../../helpers/api.helpers'
import { useIdParam } from '../../../../hooks/id-param.hook'
import { EditorMode } from '../../../../enums/common.enums'
import {
  ID,
  Material,
  MaterialsCategory,
} from '../../../../types/entities.types'
import { Optional } from '../../../../types/utility.types'

const url = apiUrl.concat('/materials')

export const MaterialsEditorLayout: React.FC<BoundEditorLayoutProps> = props => {
  const id = useIdParam()

  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [category, setCategory] = useState<Optional<string>>()

  const [categories, setCategories] = useState<Array<ID<MaterialsCategory>>>([])

  const isEditing = props.mode === EditorMode.Edit

  async function onCreate() {
    await axios.post(url, { title, link, category })
  }

  async function onUpdate() {
    await axios.patch(`${url}/${id}`, {
      title,
      link,
      category,
    })
  }

  async function onDelete() {
    await axios.delete(`${url}/${id}`)
  }

  useEffect(() => {
    ;(async () => {
      const { data: categories } = await axios.get(`${url}/categories`)
      setCategories(categories)

      if (isEditing) {
        const material: Material = (await axios.get(`${url}/${id}`)).data

        setTitle(material.title)
        setLink(material.link)
        setCategory(material.category)
      }
    })()
  }, [])

  return (
    <EditorLayout
      {...props}
      onSave={isEditing ? onUpdate : onCreate}
      onDelete={onDelete}
    >
      <Grid item xs={12} lg={4}>
        <TextField
          autoFocus
          fullWidth
          variant="outlined"
          label="Название"
          onChange={onChange(setTitle)}
          value={title}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextField
          fullWidth
          variant="outlined"
          label="Ссылка"
          onChange={onChange(setLink)}
          value={link}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="role-label">{'Категория'}</InputLabel>
          <Select
            id="role"
            labelId="role-label"
            label="Категория"
            value={category ?? ''}
            onChange={onSelect(setCategory)}
          >
            {categories.map(c => (
              <MenuItem value={c.id ?? ''} key={c.id}>
                {c.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </EditorLayout>
  )
}
