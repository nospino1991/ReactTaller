const express=require('express');
const app=express();
const cors = require('cors'); 
const body_parser = require('body-parser');



app.use(cors());
 
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(require("./routes/routes-studend.js"));
app.use(require("./routes/routes-prueba.js"));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'),()=>{
  console.log("App iniciada",app.get('port')); 
});  


