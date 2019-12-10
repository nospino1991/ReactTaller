
/*
const f_prueba =function(){
       return "Rotorno de la aplicacion" 

}*/
/*
  function f_prueba(){
    return "Rotorno de la aplicacion Valor" 

}*/
// Funciones de Flecha

const Fn_primera=()=>{
    for (var index = 0; index <5; index++) {
          console.log("Valor",index)
        
    }
      console.log("Valor final del index",index);
  
}
// var ,let 

/*
try {
    let error='';
   
} catch (error) {
    error
}*/


//Var tiene alcance de funcion 
//let tiene alcance de bloque

//Funciones Asincronas 

// FUNCIONES ASYNCRONAS PROMESAS


async function retorno(){// en un hilo distinto
  

        return "Valor"
     
}

async function retorno2(){
    let resul=await retorno();// espero a que responda me va a dar undefined
      console.log("resul", resul);
      return resul;

}

  
module.exports=retorno2;