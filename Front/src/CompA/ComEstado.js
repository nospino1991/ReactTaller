import React from 'react'

class ComEstado  extends React.Component{
      constructor(props){
          super(props);
          this.state={
                 name:'Maria',
                 data:[{"name":"jose","apellido":"apellido"},
                       {"name":"Pedro","apellido":"Perez"}
                        ]
          }
          this.handleCambiarName=this.handleCambiarName.bind(this);
      }

      handleCambiarName(){
           this.setState({
                   name:'Ana'
           })
      }
      render(){
        return (
                <div>
                    <h1>Hola, {this.state.name}</h1>
                   <button onClick={this.handleCambiarName}>CambiarNombre</button>
                </div>
            )
      }

}

export default ComEstado