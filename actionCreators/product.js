import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCT,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE
} from "../actionTypes/product";

// export const GET_PRODUCTS = 'GET_PRODUCTS'
// export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
// export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

// export const ADD_PRODUCT = 'ADD_PRODUCT'
// export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
// export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE'

// export const GET_PRODUCT = 'GET_PRODUCT'
// export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
// export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE'

export function getProducts(page, limit) {
    return {
        type: GET_PRODUCTS,
        page,
        limit
    }
}

export function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}

export function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
    }
}

export function getProductSuccess() {
    return {
        type: GET_PRODUCT_SUCCESS
    }
}

export function getProductFailure(error) {
    return {
        type: GET_PRODUCT_FAILURE,
        error
    }
}
export function deleteProduct(id) {
    console.log('acttion creator - delete '+ id);
    return {
        type: DELETE_PRODUCT,
        id
    }
}

export function deleteProductSuccess(id) {
    console.log(id, 'deleted product success id');
    return {
        type: DELETE_PRODUCT_SUCCESS,
        id        
    }
}

export function deleteProductFailure(error) {
    return {
        type: DELETE_PRODUCT_FAILURE,
        error
    }
}
