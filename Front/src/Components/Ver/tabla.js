import React from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
class Tabla extends React.Component{
    constructor(props) {
        super(props);
        this.state={
             student: [{"estudiante":'w',"nombre_completo":'w'}],
            
        }
        this.handleeliminar=this.handleeliminar.bind(this);
        this.dd = React.createRef();
      }

      handleeliminar(e){
          let a=e.target.value;
          this.dd.current.value=e.target.value;

           let productoS=this.state.student.filter((registro)=>registro.estudiante ==e.target.value);
            console.log(productoS);
       /*   let txt;
          confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => alert('Click Yes')
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          }); */               }


       
    
   async   componentDidMount(){
      let resp=await  axios("http://localhost:5000/student");
         let data= resp.data;
            for (let index = 0; index < data.length; index++) {
                data[index]["check"]=<input type="radio" name="delete" onClick={this.handleeliminar} value={data[index].estudiante}></input>;
                
            }
        console.log("dat54treta",data);
    this.setState({
        student:resp.data
        })   
        
     }
 render(){
    return (         
            <div>
                <input ref={this.dd}></input>
                <table border="1" className="table table-bordered table-striped table-hover"> 
                <thead><tr><th>Nombre</th><th></th></tr></thead>
                <tbody>
                {this.state.student.map(datos =>{
                    return (
                    <tr>
                        <td>
                           {datos.nombre_completo}  
                         
                        </td>
                        <td>
                          
                           {datos.check} 
                        </td>
                    
                    </tr>
                    )
                })}    
                </tbody>    
                </table>
            </div>
      )}}
 
export default Tabla;