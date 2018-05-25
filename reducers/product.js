import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE
} from "../actionTypes/product";

export default (prevState = {
    products: [],
    product: {},
    isLoading: false,
    isRefreshing: false,
    isDeleted: false,
    page: 1,
    limit: 8
}, action) => {
    console.log(action.type);
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...prevState,
                isLoading: prevState.products.length > 0 ? false:true,
                page: action.page
            }
        case GET_PRODUCTS_SUCCESS:
            return { ...prevState,
                isLoading: false,
                products: prevState.products.concat(action.products)
            }
        case GET_PRODUCT:
            return { ...prevState,
                isLoading: true
            }
        case GET_PRODUCT_SUCCESS:
            return { ...prevState,
                isLoading: false,
                product: action.product
            }        
        case DELETE_PRODUCT:
            return { ...prevState,
                isLoading: true
            }
        case DELETE_PRODUCT_SUCCESS:
            let id = action.id;
            let slicedProduct = prevState.products.splice(id-1, 1);
            return { ...prevState,
                isLoading: false,
                isDeleted: true,
                products: prevState.products
            }
        case GET_PRODUCTS_FAILURE:
        case GET_PRODUCT_FAILURE:
        case DELETE_PRODUCT_FAILURE:
            return { ...prevState,
                isLoading: false,
                error: action.error
            }
        default:
            return prevState;

    }
}