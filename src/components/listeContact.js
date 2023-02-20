import React,{Component} from "react";

class ListContact extends Component{
    state = {
        contact:[
            {nom:"jean",prenom:"claude",mail:"vandamme@free.fr"},
            {nom:"super",prenom:"lejs",mail:"react@free.fr"},
            {nom:"Malin",prenom:"lelynx",mail:"pub@free.fr"}
        ],
        newContact:{nom:"",prenom:"",mail:""}
    }
    pers = this.state.contact;
    listPers = this.pers.map((person)=> <li key = {this.pers.indexOf(person)} >{person.nom} {person.prenom} mail: {person.mail}</li>);
    newPers = this.state.newContact;
     handlechangename  = (e) => {
        const newContact = this.state;
        newContact[e.target.name] = e.target.value;
        this.setState({newContact});
        console.log(newContact);
     }
    

    render(){
        const newContact = this.state;
        return <>
        <input type="text" name ="nom" placeholder="nom" value={newContact.nom} onChange={this.handlechangename}></input>
        <input type="text" name ="prenom" placeholder="prenom" value={newContact.prenom} onChange={this.handlechangename}></input>
        <input type="text" name="mail"placeholder="mail" value={newContact.mail} onChange={this.handlechangename}></input>
        <button type="submit"  >enter</button>
        <ul> 
            {this.listPers}
            {console.log(this.listPers)}
        </ul>
        </>
    }


}

export default ListContact;