import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.id}>
              {cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/carts">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

//rfc ile react function component oluşturulur.
//sepete git tıklandığında router çalıştırılmak isteniyorsa Link veya Navlink ile react.Dom dan gelen elementle yapılır.
//<Dropdown.Item as={NavLink} to="/carts">  as={Navlink} yazılıarak react.routerdaki navlink gibi çalış söylemi oluşturur. to=/carts ile gideceği adres bilirtilir.
