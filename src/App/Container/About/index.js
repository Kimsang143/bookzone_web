import React, { Component } from 'react';
import { getcontactApp } from '../../Redux/actions';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgress from '@material-ui/core/LinearProgress';
class About extends Component  {

	 constructor(){
        super();
        this.state = { 
            isLoading: true
        }
    }

    componentDidMount(){
        this.props.onContactUS()
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
              this.props.contactUS.map((item) => 
              	<div key={item._id}>
              	 	<Typography gutterBottom variant="h4">About</Typography>
              	 	<Typography gutterBottom variant="h5">Name: {item.name}</Typography>
              	 	<Typography gutterBottom variant="h5">Description: {item.descript}</Typography>
              	 	
              	 	<CardMedia
                                  style={{ height: 450}}
                                  image={item.contactImage}
                                  title="Contemplative Reptile"
                     />
              	 	<Typography gutterBottom variant="h5">Email : {item.email}</Typography>  
              	 	<Typography gutterBottom variant="h5">Location: {item.location}</Typography>  
              	 	<Typography gutterBottom variant="h5">Telephone: {item.telephone}</Typography>
              	 	<Typography gutterBottom variant="h5">Facebook: {item.facebook}</Typography>      
              		 
              	</div>)
            }
       </div>
      );
    }
}


function mapStateToProps  (state)  {
    return {
      contactUS: state.contactApp.contactUSData,
      isFetching: state.contactApp.isFetching
    };
}

function mapDispatchToProps (dispatch) {
    return {
        onContactUS:() =>dispatch(getcontactApp.fetchDataFromContactUS()) 
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(About);