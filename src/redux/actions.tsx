import { ADD_TO_CART } from "./constants"

export function addtocart(selected:any) {
    return{
        type:ADD_TO_CART,
        // data:selected,
        payload:selected
        
    }
    
}
// export const addToCart = (selected: any) => {
//     return {
//       type: 'ADD_TO_CART',
//       payload: selected,
//     };
//   };