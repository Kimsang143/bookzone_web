import React, { Component } from 'react';
import { getBook } from '../../Redux/actions';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import LinearProgress from '@material-ui/core/LinearProgress';

class Home extends Component  {
   constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
    componentDidMount(){
        this.props.onBookNew()
    }

    _goToBookDetail = (EventId) =>{ 
        //alert(EventId)
        //this.props.goToScreen('BookFreeDetail',EventId);
    }

    handleClick= (EventId) =>{
      alert(EventId)
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
        <div>
        <div>
            <Grid item xs={12}>
              <Grid container style={{ flexGrow: 1 ,alignItems:  'center', alignContent:  'center', justifyContent:  'center'}}>
                {this.props.bookNew.map(value => (
                  <Grid key={value._id} item>
                      <Card style={{width: 250, height: 450, margin: 10 ,alignItems:  'center', alignContent:  'center', justifyContent:  'center'}}>
                               
                              
                               <CardActionArea>
                                <CardMedia
                                  style={{ height: 250}}
                                  image={value.productImage}
                                  title="Contemplative Reptile"
                                />
                                
                              </CardActionArea>   
                              <CardContent>
                                  <Typography gutterBottom variant="h6" component="h2">
                                    {value.name}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                   
                                  </Typography>
                                </CardContent>
                                 <CardContent>
                                 <button onClick={(EventId) => this.handleClick(value._id)}>
                                      Click me
                                </button>
                                 </CardContent>                    
                      </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          
       </div>
        </div>
    );
    }
}

function mapStateToProps  (state)  {
    return {
      bookNew: state.productBook.productDataBookNew,
       isFetching: state.productBook.isFetching
    };
}

function mapDispatchToProps (dispatch) {
    return {
        onBookNew:() =>dispatch(getBook.fetchDataFromProductBookNew()) 
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Home)