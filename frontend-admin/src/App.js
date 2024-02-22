import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Admin, Resource, fetchUtils } from 'react-admin';
import AdminPanel from './component/AdminPanel';
import { ListCategory, EditCategory, CreateCategory } from './component/Category';
import { ListProduct, EditProduct, CreateProduct } from './component/Product';
import { UserList, UserEdit, UserCreate } from './component/User';
import { TokenList, TokenEdit, TokenCreate } from './component/Token';
// import simpleRestProvider from 'ra-data-simple-rest';
import dataProvider from "./component/customDataProvider";
// const httpClient = fetchUtils.fetchJson;

const App = () => (
  <Admin dashboard={AdminPanel}
    // dataProvider={simpleRestProvider("http://localhost:8080/api", httpClient)}
    dataProvider={dataProvider}
  >
	  <Resource name="categories" list={ListCategory} edit={EditCategory} create={CreateCategory}/>
	  <Resource name="products" list={ListProduct} edit={EditProduct} create={CreateProduct}/>
	  <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
	  <Resource name="tokens" list={TokenList} edit={TokenEdit} create={TokenCreate}/>
  </Admin>
);

export default App;