import React from "react";
import Test from "./Test";

class App extends React.Component{
  state = {
    name: 'Siva',
    age: 27
  }
  render(){
    return(
      <div>
        {/* <h3>My name is {this.state.name} and I am {this.state.age} year's old</h3> */}
        <Test name={this.state.name} age={this.state.age} />
      </div>
    )
  }
}

export default App;