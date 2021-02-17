import React from 'react'
import { MaterialsEditorLayout } from '../../components/layouts/editor/materials/MaterialsEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const AddMaterialPage: React.FC = () => (
  <MaterialsEditorLayout
    title="Добавить материал"
    mode={EditorMode.Add}
    url="materials"
  />
)
