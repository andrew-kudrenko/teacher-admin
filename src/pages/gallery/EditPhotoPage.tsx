import React from 'react'
import { GalleryEditorLayout } from '../../components/layouts/editor/gallery/GalleryEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const EditPhotoPage: React.FC = () => (
  <GalleryEditorLayout title="Редактировать фото" mode={EditorMode.Edit} />
)
