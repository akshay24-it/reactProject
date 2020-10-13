import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App=()=>{
  return(
    <div>
      <Navbar/>
      <div className="body_section">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/service" component={Service}></Route>
          <Route exact path="/contactus" component={ContactUs}></Route>
        </Switch>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
