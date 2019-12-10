import React from 'react';
import { Form } from 'react-advanced-form';
import axios from 'axios';

class Formulario extends React.Component{
    constructor(props){
         super(props);
         this.name = React.createRef();
         this.dni = React.createRef();
         this.direccion = React.createRef();
         this.tlf = React.createRef();
         this.correo = React.createRef();
         this.carrera = React.createRef();
         this.estado = React.createRef();
      
         this.state={
            value:""
     }
         this.handleButtonClick=this.handleButtonClick.bind(this);
    }

    handleButtonClick(e){
    
       /* axios.get('http://localhost:5000/student')
        .then(function(respons) {
            console.log(respons);
       }).catch(function (error){
         throw error;
       })*/

      

       fetch("http://localhost:5000/student",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body:JSON.stringify({
                        "name":this.name.current.value,
                         "dni":this.dni.current.value,
                         "direccion":this.direccion.current.value,
                         "tlf":this.tlf.current.value,
                         "correo":this.correo.current.value,
                         "carrera":this.carrera.current.value,
                         "estado":this.estado.current.value

    })       
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })

 /*    axios.post('http://localhost:5000/student',{
         data:this.textInput.current.value
     }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function(respons) {
           
       }).catch(function (error){
         throw error;
       })*/
    }
  render(){
    const style={
         
        "width":"70%",
        "margin":"0px auto",
        "margin-bottom":"50px"
    }
    
    const style1={
        "padding":"20px"
    }
    
        return (
        <div style={style}>
        <div className="page-header">
            <h1>Ingrese los datos del nuevo Estudiante</h1>
       </div>
           <div className="panel panel-primary">
               <div className="panel-heading">Información Consultores</div>
                   <div className="panel-body" refs="form" style={style1}>
                   <form className="Form-horizontal">
                       <div className="form-group">
                          <div className="row">
                             <div class="col-md-6">
                                 <label for="exampleInputEmail1">Nombre Completo:</label>
                                 <input type="text" ref={this.name} class="form-control"   placeholder="Escriba su primer nombre y primer apellido..."/>
                             </div>
                             <div  class="col-md-6">
                                 <label for="exampleInputEmail1">DNI:</label>
                                 <input type="text" ref={this.dni}  class="form-control" name="dni"  placeholder=""/>
                             </div>
                            </div>
                       </div>
                       <div class="form-group">
                         <div className="rows">
                               <label for="exampleInputEmail1">Dirección (*):</label>
                              <textarea className="form-control"  ref={this.direccion}  ></textarea>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                             <div class="col-md-6">
                                 <label for="exampleInputEmail1">Teléfono (*):</label>
                                 <input type="text" class="form-control"  ref={this.tlf} name="telefono" aria-describedby=""/>
                             </div>
                             <div  class="col-md-6">
                                 <label for="exampleInputEmail1">Correo (*):</label>
                                 <input type="text" class="form-control" ref={this.correo} placeholder=""/>
                             </div>
                            </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                             <div class="col-md-6">
                                 <label for="exampleInputEmail1">Carrea (*):</label>
                                 <input type="text" class="form-control" ref={this.carrera} name="carrera" aria-describedby=""/>
                             </div>
                             <div  class="col-md-6">
                                 <label for="exampleInputEmail1">Estado Civil (*):</label>
                                 <select t class="form-control" ref={this.estado}>
                                     <option value="Soltero">Soltero </option>
                                     <option value="Casado">Casado</option>
                                 </select>
                             </div>
                            </div>
                        </div>
                       
                        </form>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={this.handleButtonClick}>Guardar</button>
                        </div>
                        
                  </div>
               </div>
            </div>
            )



  }
        
 
}
 export default Formulario