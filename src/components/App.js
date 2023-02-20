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
import TableFruits from './TableauFruit';
// import ListePersonne from './listePersonneHook';
import Timer from './timerHook';
import TwoBtn from './twoBtnHook';
import Changement from './changementbaground';
import Garage from './garrageHook';
import ListeContacts from './listeProps';
import ListemailTel from './listecreateContext';
import DashBord from './dashbordChart1';
import { Routes,Route } from 'react-router-dom';
import Header from './header';
import DisplayTaskes from './tableauListeTaches';

function App() {



  return (
    
    <div className="App" >
    
      <div className="body">
        <Header/>
      <Routes>
        <Route exact path="/" element={<Hello prenom="pierre"/>}/>
        
        <Route path="/ClassHello" element={<Salut prenom="jean"/>}/>
        <Route path="/count" element={<CounterButton/>}/>
        <Route path="/nomPersonne" element={<Personne/>}/>
        <Route path="/countHook" element={<CountHook/>}/>
        <Route path="/helloHook" element={<HelloHook/>}/>
        <Route path="/changementbaground" element={<Changement/>}/>
        <Route path="/dashbordChart1" element={<DashBord/>}/>
        <Route path="/personneHook" element={<Personnes/>}/>
        <Route path="/timerHook" element={<Timer/>}/>
        <Route path="/listecreateContext" element={<ListemailTel/>}/>
        <Route path="/listeProps" element={<ListeContacts/>}/>
        <Route path="/btnToogle" element={<BtnToogle/>}/>
        <Route path="/twoBtnHook" element={<TwoBtn/>}/>
        <Route path="/TableauFruit" element={<TableFruits/>}/>
        <Route path='/tableauListeTaches' element={<DisplayTaskes/>}/>
        </Routes>
      
        
      </div>
    </div>
   
  );
}

export default App;
