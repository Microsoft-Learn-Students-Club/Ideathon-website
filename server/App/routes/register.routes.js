let express=require("express");
const { enquiryInsert,enquiryView } = require("../../App/controllers/register.controller");
let enquiryrouter=express.Router();

enquiryrouter.post("/insert",enquiryInsert)

enquiryrouter.get("/view",enquiryView)

module.exports=enquiryrouter;