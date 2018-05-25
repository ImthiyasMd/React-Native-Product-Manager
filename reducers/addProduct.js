import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE
} from "../actionTypes/product";

const initialState = {
    isLoading: false,
    isProductAdded: false,
};
export default (prevState = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...prevState,
                isLoading: true,
                isProductAdded: false,
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                isProductAdded: true,
            }
        case ADD_PRODUCT_FAILURE:
            return {
                ...prevState,
                isLoading: false,
                isProductAdded: false,
                error: action.error
            }
        default:
            return prevState;

    }
}