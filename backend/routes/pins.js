const router = require("express").Router();
const Pin = require("../models/pin")

router.post("/",(req,res)=>{
    
})


router.get("/", async (req,res) => {
    try {
        const pins = await Pin.find(); 
        res.status(200).json(pins)
    }catch(err){
         res.status(500).json(err)
    }       
        
})
module.exports = router;