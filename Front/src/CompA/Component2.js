import React from 'react'
import axios from 'axios';
import { spawn } from 'child_process';

class  Comp2 extends React.Component{
    constructor(props){//primero que se ejecuta
        super(props);
        this.state={
            DataStudend:[]
        }
        this.handleO=this.handleO.bind(this);
    }
 async componentDidMount(){
     try {
           let result=await axios.get('http://localhost:5000/student')
           this.setState({//El componente se vuelve a renderizar
                          DataStudend:result.data
            }) 
         }catch (error){  
     }
  //ocultar loadind 
  }
  handleO(e){
      console.log("Valor del registro a eliminar en BD",e.target.value)
  }

  render(){
    const style={
        "width":"70%",
        "margin-top":"20px",
        "margin":"0 px auto",
        "background":"white",
        "padding":"10px"
  }

    return (
            <div style={style}>
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Tlf</th>
                            <th>Seleccionar</th>
                        </thead>
                    <tbody>
                        {this.state.DataStudend.map((registro)=>{       
                             return(   
                                    <tr>
                                        <td>{registro.estudiante}</td>
                                        <td>{registro.nombre_completo}</td>
                                        <td>{registro.direccion}</td>
                                        <td>{registro.tlf}</td>
                                        <td><input type="radio" name="hh" value={registro.estudiante} onClick={this.handleO}></input></td>
                                    </tr>

                                  )
                              } 
                           )} 
                     </tbody>
                </table>
            </div>
       )}
    }

export default Comp2;