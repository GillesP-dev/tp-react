import React from 'react'
import { Link } from 'react-router-dom'

function Header(props){
    return(
        <nav>
            <Link to="/"><button>Hello</button></Link>
            <Link to="/ClassHello"><button>salut</button></Link>
            <Link to="/count"><button>Compteur</button></Link>
            <Link to="/nomPersonne"><button>displayname</button></Link>
            <Link to="/countHook"><button>Compteur</button></Link>
            <Link to="/helloHook"><button>Hello</button></Link>
            <Link to="/changementbaground"><button>changeBack</button></Link>
            <Link to="/dashbordChart1"><button>Graphiques</button></Link>
            <Link to="/personneHook"><button>Aff-Nom-Age</button></Link>
            <Link to="/timerHook"><button>Horloge</button></Link>
            <Link to="/listecreateContext"><button>Aff-Tel-Mail</button></Link>
            <Link to="/listeProps"><button>Aff-Contacts</button></Link>
            <Link to="/btnToogle"><button>Btn-ON-OFF</button></Link>
            <Link to="/twoBtnHook"><button>Btn</button></Link>
            <Link to="/TableauFruit"><button>Tableau-fruits</button></Link>
            <Link to="/tableauListeTaches"><button>Tableau-Taches</button></Link>

        </nav>
    )
}
export default Header