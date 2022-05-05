//sepet ile ilgili actionlar bu dosya içerisinde tutulacak
//actionlar reducerlara gönderilen operasyonlardır

export const ADD_TO_CART = "ADD_TO_CART" // action type ismi sabiti 
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product) {
  return {
      type : ADD_TO_CART,
      payload : product
  }
}

export function removeFromCart(){
    return{
        type : REMOVE_FROM_CART,
        payload : product
    }
}

