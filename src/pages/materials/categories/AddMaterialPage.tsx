import React from 'react'
import { MaterialsCategoriesEditorLayout } from '../../../components/layouts/editor/materials/categories/MaterialsCategoriesEditorLayout'
import { EditorMode } from '../../../enums/common.enums'

export const AddMaterialsCategoryPage: React.FC = () => (
  <MaterialsCategoriesEditorLayout
    title="Добавить категорию материалов"
    mode={EditorMode.Add}
    url="materials-categories"
  />
)
