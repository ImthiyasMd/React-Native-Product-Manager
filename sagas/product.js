import {
    put,
    takeLatest
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/product";
import * as addProductActionCreators from "../actionCreators/addProduct";
import * as detailActionCreators from "../actionCreators/productDetail";

import {
    GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT_DETAIL
} from "../actionTypes/product";

import * as searchActionCreators from "../actionCreators/search"
import {
    SEARCH_PRODUCT
} from "../actionTypes/search";

let URI = "http://172.16.104.186:4000";

function* getProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* searchProduct(action) {
    try {        
        let products = yield fetch(`${URI}/products?q=${action.search}&_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(searchActionCreators.searchProductSuccess(products))
    } catch (error) {
        yield put(searchActionCreators.searchProductFailure(error))
    }
}

function* deleteProduct(action) {
    try {
        console.log(`${URI}/products?/${action.id}`, 'delete product');
        let products = yield fetch(`${URI}/products?/${action.id}`,{
            method: 'DELETE', 
        }).then(r => r.json());
        yield put(actionCreators.deleteProductSuccess(action.id))
    } catch (error) {
        yield put(actionCreators.deleteProductFailure(error))
    }
}

// function* getProduct(action) {
//     try {
//         let product = yield fetch(`${URI}\product\${action.id}`).then(r => r.json());
//         yield put(actionCreators.getProductSuccess(product))
//     } catch (error) {
//         yield put(actionCreators.getProductFailure(error))
//     }
// }

function* addProduct(action) {
    try {
        let product = yield fetch(`${URI}/products`, {
            body: JSON.stringify(action.product),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        yield put(addProductActionCreators.addProductSuccess(product))
    } catch (error) {
        yield put(addProductActionCreators.addProductFailure(error))
    }
}

function* getProductDetail(action) {
    try {

        console.log(`${URI}/products/${action.id}`, 'detail url');
        let productDetails = yield fetch(`${URI}/products/${action.id}`).then(r => r.json());
        yield put(detailActionCreators.getProductDetailSuccess(productDetails))
    } catch (error) {
        yield put(detailActionCreators.getProductDetailFailure(error))
    }
}

export function* productWatchers() {
    yield takeLatest(GET_PRODUCTS, getProducts)
    yield takeLatest(SEARCH_PRODUCT, searchProduct)
    yield takeLatest(DELETE_PRODUCT, deleteProduct)
    yield takeLatest(ADD_PRODUCT, addProduct)
    yield takeLatest(GET_PRODUCT_DETAIL, getProductDetail)
}