import React from 'react'
import { GalleryEditorLayout } from '../../components/layouts/editor/gallery/GalleryEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const AddPhotoPage: React.FC = () => (
  <GalleryEditorLayout title="Добавить фото" mode={EditorMode.Add} />
)
