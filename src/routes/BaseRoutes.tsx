import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AddPhotoPage } from '../pages/gallery/AddPhotoPage'
import { EditPhotoPage } from '../pages/gallery/EditPhotoPage'
import { GalleryPage } from '../pages/gallery/GalleryPage'
import { HomePage } from '../pages/HomePage'
import { AddMaterialPage } from '../pages/materials/AddMaterialPage'
import { AddMaterialsCategoryPage } from '../pages/materials/categories/AddMaterialPage'
import { EditMaterialsCategoryPage } from '../pages/materials/categories/EditMaterialsCategoryPage'
import { MaterialsCategoriesPage } from '../pages/materials/categories/MaterialsCategoriesPage'
import { EditMaterialPage } from '../pages/materials/EditMaterialPage'
import { MaterialsPage } from '../pages/materials/MaterialsPage'
import { AddNewsPage } from '../pages/news/AddNewsPage'
import { EditNewsPage } from '../pages/news/EditNewsPage'
import { NewsPage } from '../pages/news/NewsPage'

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

      <Route exact path="/gallery/edit/:id" component={EditPhotoPage} />
      <Route exact path="/gallery/add" component={AddPhotoPage} />
      <Route exact path="/gallery" component={GalleryPage} />

      <Route exact path="/news/edit/:id" component={EditNewsPage} />
      <Route exact path="/news/add" component={AddNewsPage} />
      <Route exact path="/news" component={NewsPage} />

      <Route exact path="/home" component={HomePage} />
      {/* <Redirect from="*" to="/home" /> */}
    </Switch>
  )
}
