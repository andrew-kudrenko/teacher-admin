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
import { News } from '../../../../types/entities.types'
import { FilePicker } from '../../../file-picker/FilePicker'

const baseUrl = `${apiUrl}/news`

export const NewsEditorLayout: React.FC<BoundEditorLayoutProps> = props => {
  const id = useIdParam()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const loaderProps = useFileLoader(`${baseUrl}/upload`)

  const { onUpload, preview: image, setPreview } = loaderProps

  const isEditing = props.mode === EditorMode.Edit

  async function onCreate() {
    const response = await onUpload()
    const file = response?.data
    await axios.post(baseUrl, { title, content, image: file ? image : null })
  }

  async function onUpdate() {
    const response = await onUpload()
    await axios.patch(`${baseUrl}/${id}`, {
      title,
      content,
      image: response?.data ?? null,
    })
  }

  async function onDelete() {
    await axios.delete(`${baseUrl}/${id}`)
  }

  useEffect(() => {
    ;(async () => {
      const response = await axios.get(`${baseUrl}/${id}`)
      if (response.data) {
        const { title, image, content } = response.data as News

        if (image) {
          setPreview(image)
        }

        setTitle(title)
        setContent(content)
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
          label="Заголовок"
          onChange={onChange(setTitle)}
          value={title}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={10}
          variant="outlined"
          label="Содержание"
          onChange={onChange(setContent)}
          value={content}
        />
      </Grid>
      <Grid item xs={12}>
        <FilePicker {...loaderProps} />
      </Grid>
    </EditorLayout>
  )
}
