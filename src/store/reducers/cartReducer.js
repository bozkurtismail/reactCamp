import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}
export default function cartReducer(state = initialState, { type, payload }) {   //sepetin son halinin tutulduğu yer gönderilen actiona göre
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)//statteki yani(cartItems) cartItemlerin içerisinden bul her bir cartItemdaki
            //productin idsi 3 tane eşittir gönderilen payloadın id sine 
            //state sepet elemanlarını tutmakta olup .sepet elemanlarının değiştiğini redux eğer referans değiştiyse sepete yeni eleman eklendiği veya 
            //değiştiği anlaşılar.Bu sebeple aboneleri bilgilendirebilmek için ilgili sepet nesnesi yani statin referansını değiştittirir.

            if (product) { //eğerki product sepette var ise yani mevcut seppetteki ürün daha önce eklenmiş ise 
                product.quantity++; //quantity bir bir artar ama sepet miktarının tam olarak değişmesi için referansının tam olarak değiştirilmesi gerekir.
                return {
                    ...state //burdaki hareketle yeni bir state nesnesi yani initialState nesnesi yani cartItems objesi döndürülmüş olur.
                    //(...) ile içerisindeki elemanları yeniden ayırarak array den dışarı çıkararak döndürür.
                }
            } else {//sepette eğer ürün yok ise 
                return { // yeni bir obje
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]//state içerisindeki önceki productları array içerisinden çıkarır.yanına en son eklenilen
                    //yeni ürünle beraber array içerisine alınıp cart item olarak return eder.
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,//hali hazırdaki statin yedeğini aldı.
                cartItems: state.cartItem.filter((c) => c.product.id !== payload.id)
            }
        default:
            return state;
    }
}