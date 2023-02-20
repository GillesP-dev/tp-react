import logo from '../assets/logo.svg';
import '../styles/App.css';
import Hello from './hello';
import Salut from './ClassHello';
import CounterButton from './count';
import Personne from './nomPersonne';
// import ListContact from './listeContact';
import HelloHook from './helloHook';
import CountHook from './countHook';
import BtnToogle from './btnToogle';
import Personnes from './personneHook';
// import TableFruits from './TableauFruit';
// import ListePersonne from './listePersonneHook';
import Timer from './timerHook';
import TwoBtn from './twoBtnHook';
import Changement from './changementbaground';
import Garage from './garrageHook';
import ListeContacts from './listeProps';
import ListemailTel from './listecreateContext';
import DashBord from './dashbordChart1';








function App() {



  return (
    
    <div className="App" >
    
      <div className="body">
      
        <Hello prenom="pierre"/>
        <Salut prenom="jean"/>
        <CounterButton/>
        <Personne/>
        <CountHook/>
        <HelloHook/>
        <BtnToogle/>
        <Personnes/>
        <TwoBtn/>
        <Changement/>
        <ListeContacts/>
        <ListemailTel/>
        <Timer/>
        
        <DashBord/>
        
      </div>
    </div>
   
  );
}

export default App;
