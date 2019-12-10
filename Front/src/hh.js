

import { BrowserRouter,Route }  from 'react-router-dom';
import App from './App';
import Formulario from './Components/Container/index'

function ff(){
    return(
    <App>
    <BrowserRouter>
                 <Route path="/crear" component={Formulario}/>
          </BrowserRouter>
    
    </App>
)
}

export default ff
