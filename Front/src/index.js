import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import App from './App';
import Comp1 from './CompA/component1';
import Comp2 from './CompA/Component2';
import Estado from './CompA/ComEstado';
import Not from './Components/NotFould';





 function enrutadora(){//Al llamar a una funcion obtengo lo que retorna
       return(
              <BrowserRouter>
              < Switch>
                    <Route path="/PrimerComponent" component={Comp1} />
                    <Route path="/segundo" component={Comp2} />
                    <Route path="/Estado" component={Estado} />
                    <Route component={Not}></Route>
                    </Switch>
              </BrowserRouter>

       )
  }

 
ReactDOM.render(<App Component={enrutadora()}/>, document.getElementById('root'));


