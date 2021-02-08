import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, TextField } from '@material-ui/core'
import { EditorLayout } from '../EditorLayout'
import { BoundEditorLayoutProps } from '../../../../types/components.types'
import { apiUrl } from '../../../helpers/api.helpers'
import { useIdParam } from '../../../../hooks/id-param.hook'
import { EditorMode } from '../../../../enums/common.enums'
import { useFileLoader } from '../../../../hooks/file-uploading'
import { FileLoader } from '../../../files/FileLoader'
import { onChange } from '../../../helpers/form.helpers'

const baseUrl = `${apiUrl}/photos`

export const GalleryEditorLayout: React.FC<BoundEditorLayoutProps> = props => {
  const id = useIdParam()

  const [cols, setCols] = useState(1)
  const loaderProps = useFileLoader(`${baseUrl}/upload`)

  const { onUpload } = loaderProps

  const isEditing = props.mode === EditorMode.Edit

  async function onCreate() {
    const response = await onUpload()
    if (response) {
      const file: string = response.data
      console.log(file)
      console.log(await axios.post(baseUrl, { cols, file }))
    }
  }

  async function onUpdate() {}

  async function onDelete() {}

  useEffect(() => {}, [])

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
          label="Колонки"
          onChange={onChange(setCols)}
          value={cols}
        />
      </Grid>
      <Grid item xs={12}>
        <FileLoader {...loaderProps} />
      </Grid>
    </EditorLayout>
  )
}
