import React from 'react';
import PassValue from "./PassValue";
class DivTest extends React.Component{
    state = {
        "name" : 'Siva',
        "age" : 20
    }
    render(){
        return(
           <div>
                <h1>Hello {this.state.name}</h1>
                <PassValue name={this.state.name} age={this.state.age} />
           </div>
        )
    }
}

export default DivTest;