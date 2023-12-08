import React from "react";
class PassValue extends React.Component{
    render(){
        return(
            <div>
                <p> This is {this.props.name} and age is {this.props.age}</p>
            </div>
        )
    }
}

export default PassValue;