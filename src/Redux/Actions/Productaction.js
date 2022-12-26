import { Actiontypes } from "../Contants/Actiontypes";
export const setProducts=(products)=>{
    return{
        type:Actiontypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct=(product)=>{
return{
    type:Actiontypes.SELECTED_PRODUCT,
    payload:product
};
}; export const removeProduct=(product)=>{
    return{
        type:Actiontypes.REMOVE_PRODUCT,
    };
    };
