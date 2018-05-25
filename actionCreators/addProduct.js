import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
} from "../actionTypes/product";

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function addProductSuccess() {
    return {
        type: ADD_PRODUCT_SUCCESS,
    }
}

export function addProductFailure(error) {
    return {
        type: ADD_PRODUCT_FAILURE,
        error
    }
}