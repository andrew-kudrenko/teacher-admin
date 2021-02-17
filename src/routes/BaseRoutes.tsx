import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AddContactsPage } from '../pages/contacts/AddContactsPage'
import { ContactsPage } from '../pages/contacts/ContactsPage'
import { EditContactsPage } from '../pages/contacts/EditContactsPage'
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
import { AddParentsPage } from '../pages/parents/AddParentsPage'
import { EditParentsPage } from '../pages/parents/EditParentsPage'
import { ParentsPage } from '../pages/parents/ParentsPage'
import { EditPortfolioPage } from '../pages/portfoliio/EditParentsPage'
import { AddPortfolioPage } from '../pages/portfoliio/AddPortfolioPage'
import { PortfolioPage } from '../pages/portfoliio/PortfolioPage'

export const BaseRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/portfolio/edit/:id" component={EditPortfolioPage} />
      <Route exact path="/portfolio/add" component={AddPortfolioPage} />
      <Route exact path="/portfolio" component={PortfolioPage} />

      <Route exact path="/contacts/edit/:id" component={EditContactsPage} />
      <Route exact path="/contacts/add" component={AddContactsPage} />
      <Route exact path="/contacts" component={ContactsPage} />

      <Route exact path="/parents/edit/:id" component={EditParentsPage} />
      <Route exact path="/parents/add" component={AddParentsPage} />
      <Route exact path="/parents" component={ParentsPage} />

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
