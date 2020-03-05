import React,{ Component } from "react";
import NewComponent from "../components/StatefulComponent"
// const Person = (props) => (

//     <div>
//         <h1>{props.lastName},{props.firstName}</h1>
//         <h1>{props.age}</h1>
//         <h4>{props.hairColor}</h4>
//         <NewComponent/>
//     </div>

// )
// export default Person;

class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        const Button = (props) => {
            return(
            <button onClick={this.handleClick}>Birthday button for {firstName}{lastName}</button>
            )

        }
        let newAge = parseInt(age) + this.state.clickCount;
        return (
        <div>
            <h1>{firstName}{lastName}</h1>
            <h4>Age: {newAge}</h4>
            <h4>Hair Color: {hairColor}</h4> 
            <Button handleClick={this.handleClick}/>    
        </div>    
        );
    }

}
export default Person
