import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import ErrorPage from "../pages/ErrorPage";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route exact path="/" component={<ProductList />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route path="/products/:name" element={<ProductDetail />} />
              <Route path="/carts" element={<CartDetail />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
/*<Routes>
<Route exact path="/" component={<ProductList/>} />
<Route path="/products" element={<ProductList/>} />             
</Routes>
adres kısmında main adres yanında /products path adresi gelirse products listesi gelecektir.
onun dışındaki gelen adreslerde liste gelmeyecektir.*/
