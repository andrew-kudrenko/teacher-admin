import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, TextField } from '@material-ui/core'
import { EditorLayout } from '../EditorLayout'
import { BoundEditorLayoutProps } from '../../../../types/components.types'
import { apiUrl } from '../../../helpers/api.helpers'
import { useIdParam } from '../../../../hooks/id-param.hook'
import { EditorMode } from '../../../../enums/common.enums'
import { useFileLoader } from '../../../../hooks/file-uploading'
import { onChange } from '../../../helpers/form.helpers'
import { Photo } from '../../../../types/entities.types'
import { FilePicker } from '../../../file-picker/FilePicker'

const baseUrl = `${apiUrl}/photos`

export const GalleryEditorLayout: React.FC<BoundEditorLayoutProps> = props => {
  const id = useIdParam()

  const [cols, setCols] = useState(1)
  const loaderProps = useFileLoader(`${baseUrl}/upload`)

  const { onUpload, preview, setPreview } = loaderProps

  const isEditing = props.mode === EditorMode.Edit

  async function onCreate() {
    const response = await onUpload()
    if (response) {
      const file: string = response.data
      await axios.post(baseUrl, { cols, file })
    }
  }

  async function onUpdate() {
    await onUpload()
    console.log(
      await axios.patch(`${baseUrl}/${id}`, {
        cols,
        file: preview,
      })
    )
  }

  async function onDelete() {
    await axios.delete(`${baseUrl}/${id}`)
  }

  useEffect(() => {
    ;(async () => {
      const response = await axios.get(`${baseUrl}/${id}`)
      if (response.data) {
        const { cols, file } = response.data as Photo
        setCols(cols ? cols : 1)

        if (file) {
          setPreview(file)
        }
      }
    })()
  }, [])

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
          value={cols || ''}
        />
      </Grid>
      <Grid item xs={12}>
        <FilePicker {...loaderProps} />
      </Grid>
    </EditorLayout>
  )
}
