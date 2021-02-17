import React from 'react'
import { MaterialsCategoriesEditorLayout } from '../../../components/layouts/editor/materials/categories/MaterialsCategoriesEditorLayout'
import { EditorMode } from '../../../enums/common.enums'

export const EditMaterialsCategoryPage: React.FC = () => (
  <MaterialsCategoriesEditorLayout
    title="Редактировать категорию материалов"
    mode={EditorMode.Edit}
    url="materials-categories"
  />
)
