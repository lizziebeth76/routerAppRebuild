
import React, {Component} from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home';
import Mealplans from './Mealplans';
import Pricing from './Pricing';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header"></header>
//     </div>
//   );
class Routes extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="Mealplans" path="/mealplans" component={Mealplans}/>
          <Route name="Pricing" path="/pricing" component={Pricing} />
        </div>
      </Router>
    );
  }
}


export default Routes;