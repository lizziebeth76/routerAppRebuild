import React, {Component} from 'react';
import  { Link } from "react-router-dom";

class Navbar extends Component {
    render(){
      return(
        <div className="nav">
          <Link to="/">Home</Link> | 
          <Link to="/mealplans">Mealplans</Link> | 
          <Link to="/pricing">Pricing</Link> 
        </div>
      );
    }
  }

  export default Navbar;