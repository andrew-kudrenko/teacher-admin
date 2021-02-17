import React from 'react'
import { NewsEditorLayout } from '../../components/layouts/editor/news/NewsEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const AddParentsPage: React.FC = () => (
  <NewsEditorLayout
    title="Добавить новость для родителей"
    mode={EditorMode.Add}
    url="parents"
  />
)
