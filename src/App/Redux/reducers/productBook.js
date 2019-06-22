import { PRODUCT_BOOK_NEW_REQUEST,PRODUCT_BOOK_NEW_SUCCESS,PRODUCT_BOOK_NEW_FAIL} from '../../Common/constant.js'

const initialState = {
    productDataBookNew:[],
    isFetching: false,
    error: false,
};


const productBook=(state = initialState, action)=> {
    switch (action.type) {
      
      //event popular
      case PRODUCT_BOOK_NEW_REQUEST: 
        return { 
          ...state,
          isFetching: true,
        
        }
      case PRODUCT_BOOK_NEW_SUCCESS:
        return { 
          ...state,
          isFetching: false,
          productDataBookNew:action.data,
        }
      case PRODUCT_BOOK_NEW_FAIL:
        return { 
          ...state,
          isFetching: false,
          error:action.error,
        }
      default: return state;
    }
}
export default productBook;