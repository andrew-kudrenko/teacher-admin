import React from 'react'
import { NewsEditorLayout } from '../../components/layouts/editor/news/NewsEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const EditNewsPage: React.FC = () => (
  <NewsEditorLayout title="Редактировать новость" mode={EditorMode.Edit} />
)
