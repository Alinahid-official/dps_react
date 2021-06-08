const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../src/models/user');
const config=require('../config');
const client = require('twilio')( config.accountSID, config.auth);

// ------------ Sending Otp request ------------//
exports.sendOtp=(req,res) => {
    const{phoneNumber}=req.body
    client
    .verify
    .services(config.serviceID)
    .verifications
    .create({
        to: `+91${phoneNumber}`,
        channel: req.query.channel==='call' ? 'call' : 'sms' 
    })
    .then(data => {
        res.status(200).send({
            message: "send",
        })
    }) 
            
}

// ------------ verifying Otp request ------------//
exports.verifyOtp=(req, res) => {
    const { phoneNumber, password, code } = req.body;
    if ( code.length === 6) {
        client
            .verify
            .services(config.serviceID)
            .verificationChecks
            .create({
                to: `+91${phoneNumber}`,
                code: code
            })
            .then(data => {
                if (data.status === "approved") {
                    const newUser = new User({
                        phoneNumber,
                        password
                    });
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    res.status(200).send({
                                        verified:true
                                    })
                                })
                                .catch(err => console.log(err));
                        });
                    });
                    
                }else{
                    res.status(400).send({
                        message:'wrong code'
                    })
                }
            }).catch(err=>console.log(err))
    } else {
        res.status(400).send({
            message: "wrong code :(",
            phonenumber: phoneNumber,
            
        })
    }
}
//------------ Login Handle ------------//
exports.checkPassword=(req, res) => {
    const {phoneNumber,password}=req.body;
    User.findOne({phoneNumber})
        .then(user => {
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            return res.status(200).json({
                                password:true
                            });
                        }else{
                            return res.status(200).json({
                                
                            })
                        }
                         
                    });
        });
}
exports.signIn=(req, res) => {
    const {phoneNumber,password}=req.body;
    User.findOne({phoneNumber})
        .then(user => {
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {user};
                            jwt.sign(payload, 'secret', {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                    res.json({
                                        success: true,
                                        token: `Bearer ${token}`
                                    });
                                }
                            });
                        }
                        
                    });
        });
}

//------------Async validations ------------//
 
exports.validateEmail=(req,res)=>{
    const {email}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(err){
            console.log('err')
        }
         if(user){
             res.status(200).json({user:true})
        }
    });

}
exports.validatePhone=(req,res)=>{
    const {phoneNumber}=req.body;
   
    User.findOne({phoneNumber:phoneNumber},(err,user)=>{
        if(user){
            
             res.status(200).json({user:true})
        }else{
           
            res.status(200).json({})
        }
    });

}