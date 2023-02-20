import  React, {Component}  from "react";



class CounterButton extends Component {
    state = {
        compteur : 0
    }
    
    handClickPlus = () => {
        if(this.state.compteur >= 5){
             alert("limite atteinte")
        } else
        this.setState(anciennevaleur => ({
            
            compteur : anciennevaleur.compteur+1
           
        }))
    }
    handClickMoin = () => {
        if(this.state.compteur <= 0){
            alert("limite atteinte")
       } else
        
        this.setState(anciennevaleur => ({
            
            compteur : anciennevaleur.compteur-1
        }))
    }
    
    render(){
        return(
            
            <>
            <h1 >Compteur: {this.state.compteur}</h1>
            <button   onClick = {this.handClickPlus} >+</button>
            <button   onClick = {this.handClickMoin}>-</button>
            
            </>
        )
    }
}
export default CounterButton;