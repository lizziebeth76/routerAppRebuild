// import reportWebVitals from './reportWebVitals';
// import { render } from '@testing-library/react';
// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


// function App () {
//   // render() 
//   return(

function App() {
    return (
      <div className="App">
        <header className="App-header"></header>
      </div>
    );
    }
class Home extends Component {
  render() {
    return(
      <div>
        <h1>Hollaway Home Cooking</h1>
        <h4><em>bringing the heart of our kitchen to the table in yours</em></h4>
        </div>
    );
  }
}
class Mealplans extends Component {
  render() {
    return(
      <div>
        <h1>Meal Plan Options</h1>
        <p>Whatever, your needs, we've got a meal plan that fits your family, and your budget!</p>
        <p>Be sure to check out pricing list page, where you can tell us about yourself, and we'll tell you what we can do for you!</p>
        <p>We've got options for: 
          <ul>
            <li>Individuals</li>
            <li>Small families</li>
            <li>Large families</li>
            <li>Extra healthy, or extra-decadent meals</li>
          </ul>
        </p>
      </div>
    );
  }
}
class Pricing extends Component{
  constructor(props){
    super(props);
    this.state={
      petList:[{petName:"Five dinners each week"}, {petName:"Extra healthy"}],
      inputValue:""
    }
  }
  handleNameInput=(e)=>{
    this.setState({inputValue:e.target.value});
  }
  handleClick=()=>{
    let petObj = {petName:this.state.inputValue};
    this.setState({petList: [...this.state.petList, petObj], inputValue:""});
  }
  render(){
    return(
      <div>
      <div>
        <h1>Pricing</h1>
        <p>Tell us a little more about yourself, and we'll find the right meal plan for you... (<em>please note: we are currently only offering the health meal option, with five dinners per week, for any size family</em>)</p>
          <ul>
            {/* <li>Walk to the store with you</li>
            <li>Listen to your problems and share your joys</li>
            <li>Eat your crumbs off the floor, so you don't have to sweep, ever again</li> */}
            {this.state.petList.map((pet, index)=>{
              return <li key={index}>{pet.petName}</li>
            }
            )}
            </ul>
          <h2>How many people are in your family, including yourself? </h2>
          

          </div>
      <div>
        <input value={this.state.inputValue} onChange={this.handleNameInput} placeholder="My lovely family has this many members"/>
        <button onClick={this.handleClick}>Click HERE</button>
      </div>
      </div>
    
    )
  }
}


class Navbar extends Component {
  render(){
    return(
      <div className="nav">
        <Link to="/">Home</Link> | 
        <Link to="mealplans">Mealplans</Link> | 
        <Link to="pricing">Pricing</Link> 
      </div>
    );
  }
}
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

// </div>

ReactDOM.render(<Routes />, document.getElementById('root'));


reportWebVitals();
export default App;
