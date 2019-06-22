import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import {Home, About, FAQs, Partner} from "../Container";


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func,
};

 function App(props) {
  return (
  <Router>
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
      <AppBar position="fixed" style={{ backgroundColor: '#fff'}}>
        <Toolbar >
          <Typography style={{flexGrow: 1 ,color: '#000', marginLeft: 50}}>
                <Link to="/">Book Zone</Link>
          </Typography>
          <Typography style={{ color: '#000', marginRight: 50}}>
                <Link to="/About">About</Link>
          </Typography>
          <Typography style={{ color: '#000', marginRight: 50}}>
                <Link to="/FAQs">FAQs</Link>
           </Typography>
            <Typography style={{ color: '#000', marginRight: 50}}>
                <Link to="/Partner">Partner</Link>
           </Typography>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/FAQs" component={FAQs} />
        <Route path="/Partner" component={Partner} />
      </Container>
    </React.Fragment>
     
    </Router>
  );
}
export default App