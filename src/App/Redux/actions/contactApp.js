import { baseUrl,CONTACT_US_REQUEST,CONTACT_US_SUCCESS,CONTACT_US_FAIL, FAQs_US_REQUEST, FAQs_US_SUCCESS, FAQs_US_FAIL} from '../../Common/constant.js'

export function  fetchDataFromContactUS () {
    return (dispatch) => {
       dispatch (getDataContactUS())
       fetch(`${baseUrl}/contacts`, {
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
            dispatch(getDataContactUSSuccess(jsonData.contacts))
       })
       .catch(err => {dispatch(getDataContactUSFail(err))})
    }
}

function getDataContactUS(data){
    return{
        type: CONTACT_US_REQUEST,
        data:data
    }
}

function getDataContactUSSuccess(data){
    return{
        type: CONTACT_US_SUCCESS,
        data:data
    }
}

function getDataContactUSFail(err){
    return{
        type: CONTACT_US_FAIL,
        error:err
    }
}


export function  fetchDataFromFAQs () {
    return (dispatch) => {
       dispatch (getDataFAQs())
       fetch(`${baseUrl}/faqs`, {
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
            dispatch(getDataFAQsSuccess(jsonData.Faqs))
       })
       .catch(err => {dispatch(getDataFAQsFail(err))})
    }
}

function getDataFAQs(data){
    return{
        type: FAQs_US_REQUEST,
        data:data
    }
}

function getDataFAQsSuccess(data){
    return{
        type: FAQs_US_SUCCESS,
        data:data
    }
}

function getDataFAQsFail(err){
    return{
        type: FAQs_US_FAIL,
        error:err
    }
}