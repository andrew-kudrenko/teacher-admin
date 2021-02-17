import React from 'react'
import { NewsEditorLayout } from '../../components/layouts/editor/news/NewsEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const AddPortfolioPage: React.FC = () => (
  <NewsEditorLayout
    title="Добавить в портфолио"
    mode={EditorMode.Add}
    url="portfolio"
  />
)
