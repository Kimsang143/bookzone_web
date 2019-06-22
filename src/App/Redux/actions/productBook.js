import { baseUrl,PRODUCT_BOOK_NEW_REQUEST,PRODUCT_BOOK_NEW_SUCCESS,PRODUCT_BOOK_NEW_FAIL} from '../../Common/constant.js'


export function  fetchDataFromProductBookNew () {
    return (dispatch) => {
       dispatch (getDataBookNew())
       fetch(`${baseUrl}/products/new`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
       .then(json => {
            return json.json()
       }).then ( jsonData => {
            //alert(JSON.stringify(jsonData))
            dispatch(getDataBookNewSuccess(jsonData.products))
       })
       .catch(err => {dispatch(getDataBookNewFail(err))})
    }
}

function getDataBookNew(data){
    return{
        type: PRODUCT_BOOK_NEW_REQUEST,
        data:data
    }
}

function getDataBookNewSuccess(data){
    return{
        type: PRODUCT_BOOK_NEW_SUCCESS,
        data:data
    }
}

function getDataBookNewFail(err){
    return{
        type: PRODUCT_BOOK_NEW_FAIL,
        error:err
    }
}