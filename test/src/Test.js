import React from "react";

class Test extends React.Component{
    render(){
        return(
            <center>
                 <h3>Hey, My name is {this.props.name} and I am {this.props.age} year's old</h3>
            </center>
        )
    }

}

export default Test;