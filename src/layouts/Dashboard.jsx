import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import ErrorPage from "../pages/ErrorPage";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
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
//<Route></Route> çalışabilmesi için ana bileşenin browser.router ile sarmallanması gerekir.
/*<Routes>
<Route exact path="/" component={<ProductList/>} />
<Route path="/products" element={<ProductList/>} />             
</Routes>
adres kısmında main adres yanında /products path adresi gelirse products listesi gelecektir.
onun dışındaki gelen adreslerde liste gelmeyecektir.*/
// <Route path="/products/:name" element={<ProductDetail />} /> :name parametreli bir şekilde çağırmadır.

//bootstrap bir satırı 12 eşit parçaya böler.Semantic ui ise 16 eşit parçaya böler.Semantic ui de grid sistemi kullanılır.
//ekranda Grid kullanılarak ekran 16 eşit parçaya bölünüyor 4 sütuna categorileri kalan 12 sütunada
//productList yerleştiriliyor.
