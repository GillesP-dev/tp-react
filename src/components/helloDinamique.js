import React,{Component} from "react";

class HelloDynamique extends Component{
    state = {
        prenom : ""
    }

    

    render(){
        return(
            <> <h1>Salut, {this.state.prenom}</h1>
            <input type="text" value={this.state.prenom} placeholder="Ecrire votre prenom" onChange={e=>this.setState({prenom : e.target.value})}></input></>
           
            
        )
    }
}

export default HelloDynamique;