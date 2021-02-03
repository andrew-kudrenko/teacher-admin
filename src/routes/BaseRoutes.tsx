import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { AddMaterialPage } from '../pages/materials/AddMaterialPage'
import { AddMaterialsCategoryPage } from '../pages/materials/categories/AddMaterialPage'
import { EditMaterialsCategoryPage } from '../pages/materials/categories/EditMaterialsCategoryPage'
import { MaterialsCategoriesPage } from '../pages/materials/categories/MaterialsCategoriesPage'
import { EditMaterialPage } from '../pages/materials/EditMaterialPage'
import { MaterialsPage } from '../pages/materials/MaterialsPage'

export const BaseRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/materials/edit/:id" component={EditMaterialPage} />
      <Route exact path="/materials/add" component={AddMaterialPage} />
      <Route exact path="/materials" component={MaterialsPage} />

      <Route
        exact
        path="/materials-categories/edit/:id"
        component={EditMaterialsCategoryPage}
      />
      <Route
        exact
        path="/materials-categories/add"
        component={AddMaterialsCategoryPage}
      />
      <Route
        exact
        path="/materials-categories"
        component={MaterialsCategoriesPage}
      />

      <Route exact path="/home" component={HomePage} />
      {/* <Redirect from="*" to="/home" /> */}
    </Switch>
  )
}
