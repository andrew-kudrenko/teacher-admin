import React from 'react'
import { NewsEditorLayout } from '../../components/layouts/editor/news/NewsEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const EditPortfolioPage: React.FC = () => (
  <NewsEditorLayout
    title="Редактировать достижение"
    mode={EditorMode.Edit}
    url="portfolio"
  />
)
