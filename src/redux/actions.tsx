import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART } from "./constants"

export function addtocart(selected:any) {
    return{
        type:ADD_TO_CART,
        payload:selected
    }
    
}
export function removefromcart(index:any) {
    return{
        type:REMOVE_FROM_CART,
        payload:index
    }
    
}
export function addquantity(item:any) {
    return{
        type:ADD_QUANTITY,
        payload:item
    }
    
}
