let express=require("express");
let enquirymodel=require("../../App/models/register.model");

let enquiryInsert=async (req,res)=>{

    let obj={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    }

    let data = new enquirymodel(obj);
    await data.save().then(() => {
        res.send({ "msg": "Data Inserted" })
    }).catch((err) => {
        res.send({ "msg": "Error", "error": err })
    })

    console.log(obj)
}

let enquiryView=async (req,res)=>{
    let data=await enquirymodel.find()
    res.send(data)
}

module.exports={enquiryInsert,enquiryView}