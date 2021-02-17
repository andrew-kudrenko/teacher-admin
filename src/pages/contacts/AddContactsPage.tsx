import React from 'react'
import { NewsEditorLayout } from '../../components/layouts/editor/news/NewsEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const AddContactsPage: React.FC = () => (
  <NewsEditorLayout
    title="Добавить контакт"
    mode={EditorMode.Add}
    url="contacts"
  />
)
