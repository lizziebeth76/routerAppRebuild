import React, {Component} from 'react';


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

  export default Pricing;