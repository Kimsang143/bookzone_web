import {CONTACT_US_REQUEST,CONTACT_US_SUCCESS,CONTACT_US_FAIL, FAQs_US_REQUEST, FAQs_US_SUCCESS, FAQs_US_FAIL} from '../../Common/constant.js'


const initialState = {
    contactUSData:[],
    FAQsData:[],
    isFetching: false,
    error: false,
};


const contactApp=(state = initialState, action)=> {
    switch (action.type) {
      
      //event Contacts
      case CONTACT_US_REQUEST: 
        return { 
          ...state,
          isFetching: true,
        
        }
      case CONTACT_US_SUCCESS:
        return { 
          ...state,
          isFetching: false,
          contactUSData:action.data,
        }
      case CONTACT_US_FAIL:
        return { 
          ...state,
          isFetching: false,
          error:action.error,
        }

      //event FAQs
      case FAQs_US_REQUEST: 
        return { 
          ...state,
          isFetching: true,
        
        }
      case FAQs_US_SUCCESS:
        return { 
          ...state,
          isFetching: false,
          FAQsData:action.data,
        }
      case FAQs_US_FAIL:
        return { 
          ...state,
          isFetching: false,
          error:action.error,
        }
      default: return state;
    }
}
export default contactApp;