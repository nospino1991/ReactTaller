const Sequalize=require('sequelize');
const sequalize=require('../Database_Connection/Database_Connection');

const vestudiante=sequalize.define('estudiante',{
   estudiante:{
            type:Sequalize.INTEGER,
            allowNull: false,
            primarykey:true,
   },nombre_completo:{
            type:Sequalize.STRING,
   },dni:{
         type:Sequalize.INTEGER,
   },direccion:{
            type:Sequalize.STRING,
   },tlf:{
            type:Sequalize.INTEGER,
   },correo:{
            type:Sequalize.STRING,
   },carrera:{
      type:Sequalize.STRING,
   },estadocivil:{
      type:Sequalize.STRING,
   },
   },{ timestamps: false,
      tableName: 'estudiante',
      createdAt: false,
      updatedAt: false
   });

module.exports= vestudiante;
