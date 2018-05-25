import {
    put,
    takeLatest, throttle
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/search"
import {
    SEARCH_PRODUCT
} from "../actionTypes/search";

let URI = "http://172.16.104.186:4000";

function* searchProduct(action) {
    try {        
        let products = yield fetch(`${URI}/products?q=${action.search}&_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.searchProductSuccess(products))
    } catch (error) {
        yield put(actionCreators.searchProductFailure(error))
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

// function* addProduct(action) {
//     try {
//         let product = yield fetch(`${URI}\products`, {
//             body: JSON.stringify(action.product),
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//         }).then(r => r.json());
//         yield put(actionCreators.addProductSuccess(product))
//     } catch (error) {
//         yield put(actionCreators.addProductFailure(error))
//     }
// }

export function* searchWatchers() {
    console.log('search watch');
    yield throttle(1000, SEARCH_PRODUCT, searchProduct)
}