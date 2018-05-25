import {
    GET_PRODUCT_DETAIL,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_FAILURE,
} from "../actionTypes/product";


/** actions for product details page */
export function getProductDetail(id) {
    return {
        type: GET_PRODUCT_DETAIL,
        id
    }
}

export function getProductDetailsSuccess(productDetail) {
    return {
        type: GET_PRODUCT_DETAIL_SUCCESS,
        productDetail
    }
}

export function getProductDetailFailure(error) {
    return {
        type: GET_PRODUCT_DETAIL_FAILURE,
        error
    }
}