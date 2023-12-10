//class based state and props concept
import React from "react";
import Test from "./Test";
import FunState from "./Prac/FunState";
// import OnChange from "./Prac/OnChange";
// import OnSubmit from "./Prac/OnSubmit";
import DivTest from "./hooks/DivTest";
import Main from "./funcHooks/Main";
import OnClick from "./EventHandlers/OnClick";
import OnChange from "./EventHandlers/OnChange";
import OnSubmit from "./EventHandlers/OnSubmit";

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
        <FunState />
        <center>
         {/* /* //on click event handler */}
          <button onClick={() => {alert('This is test alert')}}>Click Me</button>
        </center>
        {/* <OnChange /> */}
        <br />
        <br />
        <br />
        {/* <OnSubmit /> */}
        <DivTest />
        <Main />
        <OnClick />
        <OnChange />
        <OnSubmit />
      </div>
    )
  }
}

export default App;