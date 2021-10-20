const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const saltRounds = 4;

router.post("/register", (req,res)=>{
    bcrypt.hash(req.body.password, saltRounds, (err,hash)=>{
        if(!err){
            const newUser = new User({
            password: hash,
            email: req.body.email,
            username: req.body.username
            });
            newUser.save((err)=>{
                if(!err){
                    res.status(200).json(newUser)
                }else{
                    res.status(500).json(err)
                }
            })
        }else{
            console.log(err);
        }
      
    })
})



router.post("/login",(req,res)=>{
        username = req.body.username;
        password = req.body.password
        User.findOne(
            {username: username}, (err,foundUser)=>{
                if(err){
                    res.status(400).json(err)
                    res.send("incorrect password or email")
                }else{
                    if(foundUser){
                        bcrypt.compare(req.body.password, foundUser.password, (err,isValid)=>{
                            if(isValid){
                                res.status(200).json(foundUser)
                                res.send("user has been authenticated")
                            }
                        })
                    }
                }
            }
       )
})

module.exports = router;