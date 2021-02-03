import React from 'react'
import { MaterialsEditorLayout } from '../../components/layouts/editor/materials/MaterialsEditorLayout'
import { EditorMode } from '../../enums/common.enums'

export const EditMaterialPage: React.FC = () => (
  <MaterialsEditorLayout
    title="Релактировать материал"
    mode={EditorMode.Edit}
  />
)
