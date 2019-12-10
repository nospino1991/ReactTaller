
const sequelize=require('../Database_Connection/Database_Connection');
const Model_Estudiante=require('../Models/Model_student')
const MainProcess ={
                async getstudents(){
                 let result=await   Model_Estudiante.findAll({
                        attributes: ['estudiante','nombre_completo', 'dni', 'direccion', 'tlf', 'correo', 'carrera','estadocivil']
                    });
                    return result;
       },
       async getstudent(id){
        let result=await   Model_Estudiante.findAll({
               attributes: ['nombre_completo', 'dni', 'direccion', 'tlf', 'correo', 'carrera','estadocivil'],
                where:{
                    estudiante:id
                }
            } );
           return result;

        }, async addstudent(data){
            console.log(data);
            let result=   sequelize.query("INSERT INTO `estudiante`"
                +"(`nombre_completo`, `dni`, `direccion`, `tlf`, `correo`, `carrera`,`estadocivil`)"
                +" VALUES ('"+data.name+"',"+data.dni+",'"+data.direccion+"',"+data.tlf+",'"+data.correo+"','"+data.carrera+"','"+data.estado+"')",{ type: sequelize.QueryTypes.SELECT});
                                
               return result;
    
           }, async setstudent(data,id){
               
            let result=    Model_Estudiante.update({
                         direccion: data.direccion,
                         tlf:data.tlf
                    }, {
                        where: {
                        
                         estudiante:id
                     
                        }
              });
                                
               return result;
    
           }, async dropstudent(id){
               
            let result=await Model_Estudiante.destroy({
                        where: {
                             estudiante:id
                        }
                 });                 
               return result;
    
                }     
}
   
module.exports= MainProcess;

