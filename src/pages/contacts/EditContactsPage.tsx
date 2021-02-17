import React from 'react'
import { NewsEditorLayout } from '../../components/layouts/editor/news/NewsEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const EditContactsPage: React.FC = () => (
  <NewsEditorLayout
    title="Редактировать контакты"
    mode={EditorMode.Edit}
    url="contacts"
  />
)
