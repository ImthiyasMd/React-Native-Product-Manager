import {
    GET_PRODUCT_DETAIL,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_FAILURE
} from "../actionTypes/product";

const initialState = {
    productDetail: {},
};
export default (prevState = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAIL:
            return {
                ...prevState,
                isLoading: true
            }
        case GET_PRODUCT_DETAIL_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                productDetail: action.productDetail
            }
        case GET_PRODUCT_DETAIL_FAILURE:
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            }
        default:
            return prevState;

    }
}