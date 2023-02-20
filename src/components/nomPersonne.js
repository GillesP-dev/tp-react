import React,{Component} from "react";

class Personne extends Component{
    state = {
        nom : "",
        age : ""
    }

    

    render(){
        return(
            <> <h3 >Votre nom :</h3>
            <input  type="text" value={this.state.prenom} placeholder="Ecrire votre nom" onChange={e=>this.setState({nom : e.target.value})}></input>
            <h3  >votre age :</h3>
            <input  type="text" value={this.state.age} placeholder="Ecrire votre age" onChange={e=>this.setState({age : e.target.value})}></input>
            <h3  >{this.state.nom} vous avez :{this.state.age}ans</h3>
            </>
           
            
        )
    }
}

export default Personne;