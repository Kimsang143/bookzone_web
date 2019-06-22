import React, { Component } from 'react';
import { getcontactApp } from '../../Redux/actions';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
class FAQs extends Component  {


	 componentDidMount(){
        this.props.onFAQs()
    }


    render() {
    	if(this.props.isFetching){
           return (
                <div style={{ flexGrow: 1}} >

                <LinearProgress />
                <br />
                <LinearProgress color="secondary" />
                
              </div>
            );
          }
      return (
         <div style={{ marginTop: 10}}> 
            {
              this.props.getFAQs.map((item) => 
              	<div key={item._id}>
              	 	<Typography style={{ color: '#000'}} gutterBottom variant="h5">1. {item.question}</Typography>
              	 	<Typography gutterBottom variant="h5">{item.answer}</Typography>
              	</div>)
            }
       </div>
      );
    }
}
function mapStateToProps  (state)  {
    return {
      getFAQs: state.contactApp.FAQsData,
      isFetching: state.contactApp.isFetching
    };
}

function mapDispatchToProps (dispatch) {
    return {
        onFAQs:() =>dispatch(getcontactApp.fetchDataFromFAQs()) 
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(FAQs);