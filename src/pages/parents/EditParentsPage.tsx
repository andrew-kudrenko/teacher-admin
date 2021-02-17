import React from 'react'
import { NewsEditorLayout } from '../../components/layouts/editor/news/NewsEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const EditParentsPage: React.FC = () => (
  <NewsEditorLayout
    title="Редактировать новость для родителей"
    mode={EditorMode.Edit}
    url="parents"
  />
)
