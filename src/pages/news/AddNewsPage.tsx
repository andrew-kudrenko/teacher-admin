import React from 'react'
import { NewsEditorLayout } from '../../components/layouts/editor/news/NewsEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const AddNewsPage: React.FC = () => (
  <NewsEditorLayout title="Добавить новость" mode={EditorMode.Add} />
)
