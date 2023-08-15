import { State } from "react-native-gesture-handler";
import { ADD_TO_CART } from "./constants";

const initialState: never[]= [];

export const reducer = (state = initialState, actions: any) => {
    switch (actions.type) {
        case ADD_TO_CART:
            return[
                ...state,
                actions.payload
            ]
            
            default:
                return state
        }
}
// const initialState = {
//     cart: [],
//   };
  
//   const cartReducer = (state = initialState, actions: { type: any; payload: any; }) => {
//     switch (actions.type) {
//       case 'ADD_TO_CART':
//         return {
//           ...state,
//           cart: [...state.cart, actions.payload],
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;