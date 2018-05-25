import {
    SEARCH_PRODUCT,
    SEARCH_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAILURE
} from "../actionTypes/search";

export default (prevState = {
    products: [],
    product: {},
    isLoading: false,
    isRefreshing: false,
    page: 1,
    limit: 8,
    search: ''
}, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT:
            return { ...prevState,
                isLoading: prevState.products.length > 0 ? false:true,
                page: action.page,
                search: action.search
            }
        case SEARCH_PRODUCT_SUCCESS:
            if(prevState.page === 1){
                return { ...prevState,
                    isLoading: false,
                    products: action.products
                }  
            }else{
                return { ...prevState,
                    isLoading: false,
                    products: prevState.products.concat(action.products)
                   
                }  
            }
               
        case SEARCH_PRODUCT_FAILURE:
            return { ...prevState,
                isLoading: false,
                error: action.error
            }
        default:
            return prevState;

    }
}