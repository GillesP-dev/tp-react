import { Component } from "react";



class Salut extends Component{
    
    render() {
        
        return <h1 className="hello">Salut le monde, {this.props.prenom}</h1>
    }
}

export default Salut;