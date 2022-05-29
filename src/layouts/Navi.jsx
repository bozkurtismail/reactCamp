import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useSelector } from "react-redux";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);
  
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  let navigate = useNavigate();

  function handleSignOut() {
    setIsAuthenticated(false);
    navigate("/products");
  }

  function handleSignIn() {
      setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            {typeof cartItems !=='undefined' &&cartItems.length >0 && <CartSummary />}
            {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" /> : <SignedOut signIn={handleSignIn} bisey2="2"/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

//  <Menu inverted fixed="top"> fixed yukarıdan aşağı inerken menünün yukarıda kalmasını sağlıyor
