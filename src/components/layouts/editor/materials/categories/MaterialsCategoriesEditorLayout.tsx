import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, TextField } from '@material-ui/core'
import { EditorMode } from '../../../../../enums/common.enums'
import { useIdParam } from '../../../../../hooks/id-param.hook'
import { BoundEditorLayoutProps } from '../../../../../types/components.types'
import { apiUrl } from '../../../../helpers/api.helpers'
import { onChange } from '../../../../helpers/form.helpers'
import { EditorLayout } from '../../EditorLayout'
import { ID, Material } from '../../../../../types/entities.types'

export const MaterialsCategoriesEditorLayout: React.FC<BoundEditorLayoutProps> = props => {
  const id = useIdParam()
  const [title, setTitle] = useState('')

  const isEditing = props.mode === EditorMode.Edit

  const url = apiUrl.concat('/materials/categories')
  const urlWithId = `${url}/${id}`

  useEffect(() => {
    ;(async () => {
      if (isEditing) {
        const data: ID<Material> = (await axios.get(urlWithId)).data
        setTitle(data.title)
      }
    })()
  }, [isEditing])

  async function onCreate() {
    await axios.post(url, { title })
  }

  async function onUpdate() {
    await axios.patch(urlWithId, { title })
  }

  async function onDelete() {
    await axios.delete(urlWithId)
  }

  return (
    <EditorLayout
      {...props}
      onSave={isEditing ? onUpdate : onCreate}
      onDelete={onDelete}
    >
      <Grid item xs={12}>
        <TextField
          autoFocus
          fullWidth
          variant="outlined"
          label="Название"
          onChange={onChange(setTitle)}
          value={title}
        />
      </Grid>
    </EditorLayout>
  )
}
