const express=require("express");
const router=express.Router();
const Service=require('../Controllers.js/Service-prueba');



router.get("/prueba",  function (req,resp){  

    let result= Service()
    resp.json(result);
});




module.exports=router;