import { State } from "react-native-gesture-handler";
import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART } from "./constants";



export const reducer = (state = [], actions: any) => {
    switch (actions.type) {
        case ADD_TO_CART:
            return [
                ...state,
                actions.payload,
            ]
        case REMOVE_FROM_CART:
            const deleteArray1 = state.filter((item, index) => {
                return index !== actions.payload;
            });

            return deleteArray1;
        case ADD_QUANTITY:
            return [
                ...state,
                actions.payload,
            ]
        default:
            return state;
    }
};