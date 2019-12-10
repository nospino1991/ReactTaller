const express=require("express");
const router=express.Router();
const Service_Studed=require('../Controllers.js/Service_estudiante');



router.get("/student", async function (req,resp){ 

    let result=await Service_Studed.getstudents()
    resp.json(result);
});



router.get("/student/:id", async function (req,resp){ 

    let result=await Service_Studed.getstudent(req.params.id)
    resp.json(result);
});

router.post("/student/", async function (req,resp){ 

    let result=await Service_Studed.addstudent(req.body)
       resp.json("Operación exitosa")
    
});

router.put("/student/:id", async function (req,resp){ 

    let result=await Service_Studed.setstudent(req.body,req.params.id)
       resp.json(result);
});

router.delete("/student/:id", async function (req,resp){ 

    let result=await Service_Studed.dropstudent(req.params.id)
       resp.json(result);
});




module.exports=router;