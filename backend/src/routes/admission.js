const express = require('express');
const path = require('path');
const router = new express.Router();
const axios = require('axios')
const FormData = require('form-data');
const User = require('../models/user');
const fs =require('fs-extra');
const PDFDocument = require('pdfkit');
const Paytm = require('paytmchecksum');
const Razorpay =require('razorpay')

router.post('/updateInfo',(req,res)=>{
    let values=req.body;
    let phoneNumber=values.phoneNumber;
    let info =values.info;
  
    User.findOneAndUpdate({phoneNumber:phoneNumber},info,(err,user)=>{
        if(err){console.log(err)}
        else{
             User.findOne({phoneNumber:user.phoneNumber},(err,data)=>{
                 if(err){
                     res.status(404).json({msg:'try again'})}
                     else{res.status(200).json({data})}
                 
             })
        }
           
    })
     
})
router.post('/updateFileInfo',(req,res)=>{
    let values=req.body;
    let phoneNumber=values.phoneNumber;
    let data =values.data;
    const name =data.name;
    const url =data.url
    switch(name){
        case 'passport_image':User.findOneAndUpdate({phoneNumber:phoneNumber},{passport_image:url},(err,user)=>{
                                    if(user){
                                        let updated_user=user
                                        updated_user.father_sign=url
                                        res.status(200).json({updated_user})}
                                    else(console.log(err))
                                });
                                break;
        case 'father_sign':User.findOneAndUpdate({phoneNumber:phoneNumber},{father_sign:url},(err,user)=>{
                                    if(user){
                                        let updated_user=user
                                        updated_user.father_sign=url
                                        res.status(200).json({updated_user})
                                    }
                                    else(console.log(err))
                                });
                            break;
        case 'father_sign':User.findOneAndUpdate({phoneNumber:phoneNumber},{mother_sign:url},(err,user)=>{
                                if(user){
                                    let updated_user=user
                                    updated_user.father_sign=url
                                    res.status(200).json({updated_user})}
                                else(console.log(err))
                            });
                            break;

    }
    
    
    
})
router.post('/getUserInfo',(req,res)=>{
    const{phoneNumber}=req.body;
    
    User.findOne({phoneNumber:phoneNumber},(err,user)=>{
        if(user){
           
            res.status(200).json(user)
        }else{
            res.status(400).json({msg:'something went wrong'})
        }
    })
})
router.post('/uploadImage',(req,res)=>{
     let data =req.files.image;
   
    const imageName=data.name
    const p=path.join(__dirname,'../../',`/public/${imageName}`)
     data.mv(p,err=>{
         if(err){
             res.status(404).json({msg:err,upload:false})
         }else{
             res.status(200).json({upload:true,url:`http://localhost:4000/${imageName}`})
         }
     })
    
})
router.get('/formlist',(req,res)=>{
    User.find({},(err,users)=>{
       res.status(200).json({users})
    })
 })
 router.get('/formDetails/:id',function(req,res){
    var id=req.params.id;
    User.findById(id,function(err,form){
       if(err){
          console.log(err)
       }else{
           console.log(form)
           res.status(200).json(form)
          
         
       }
    })
   
 })
 router.post('/downloadForm',(req,res)=>{
    const {phoneNumber}=req.body
    User.findOne({phoneNumber:phoneNumber},(err,user)=>{
       if(err){
          console.log(err)
       }
       else{
        //   var c=user.dclass
        const public =path.join(__dirname,'../../',`/public`)
          var phoneNumber = user.phoneNumber
          const fileName=`${phoneNumber}.pdf`
        //   if(c!='eleven'){
            //  var n=user.name;
          const doc = new PDFDocument;
          doc.pipe(fs.createWriteStream(`${public}/forms/${fileName}`));
           
          // Add an image, constrain it to a given size, and center it vertically and horizontally
          doc.image(public+'/formImage/dps-admission-form-page-002-m.jpg',0,0, {
              fit:[615,785],
              align: 'center',
              valign: 'center'
           })
        //    .image('public/files/forms/'+user.email+'/'+user.studentPic,485,125,{fit:[100,100]})
        //    .fontSize(15)
        //    .text(user.Admission_class,175,205)
        //    .text(user.name,175,235)
        //    .text(user.dob,225,270)
        //    .text(user.dob_day,80,305)
        //    .text(user.dob_month,300,305)
        //    .text(user.dob_year,450,305)
        //    .text(user.nationality,145,340)
        //    .text(user.Religion,270,340)
        //    .text(user.Gender,510,340)
        //    .text(user.father.name,150,375)
        //    .text(user.father.Occupation,95,410)
        //    .text(user.father.Designation,270,410)
        //    .text(user.father.annualIncome,470,410)
        //    .text(user.father.organisationsNameAndAddress,170,445)
        //    .text(user.father.academicQualification,160,510)
        //    .text(user.father.PhoneNo,140,545)
        //    .text(user.mother.name,150,580)
        //    .text(user.mother.Occupation,105,615)
        //    .text(user.mother.Designation,270,615)
        //    .text(user.mother.annualIncome,470,615)
        //    .text(user.mother.organisationsNameAndAddress,170,645)
        //    .text(user.mother.academicQualification,160,675)
        //    .text(user.mother.PhoneNo,140,700);
 
        //    doc.addPage()
        //      .image(__dirname+'/file/dps-admission-form-page-001-m.jpg',0,0, {
        //      fit:[615,800],
        //      align: 'center',
        //      valign: 'center'
        //   })
        //      .fontSize(15)
        //      .text(user.address1.town,125,55)
        //      .text(user.address1.state,315,55)
        //      .text(user.address1.country,500,55)
        //      .text(user.address2.present,175,85)
        //      .text(user.address2.permanent,175,190)
        //      .text(user.sibling.one.name,50,305)
        //      .text(user.sibling.one.admsnNo,200,305)
        //      .text(user.sibling.one.class,320,305)
        //      .text(user.sibling.one.sec,440,305)
        //      .text(user.sibling.one.name,50,335)
        //      .text(user.sibling.one.admsnNo,200,335)
        //      .text(user.sibling.one.class,320,335)
        //      .text(user.sibling.one.sec,440,335)
        //      .text(user.Any_other_info,50,400)
        //      .image('public/files/forms/'+user.email+'/'+user.fpic,485,125,{fit:[100,100]})
        //      .image('public/files/forms/'+user.email+'/'+user.mpic,485,125,{fit:[100,100]})
        //      .fontSize(10)
        //      .text(user.prev_school,200,630)
        //      .text(user.prev_class,320,645)
        //      .text(user.prev_position,370,660)
        //      .text(user.prev_medium,350,675)
        //      .text(user.skills,400,690);
           
          doc.end();
        const url =`http://localhost:4000/forms/${fileName}`
        res.status(200).json({url:url})
           
    //    }else{
    //       var n=user.eleven.name
    //       const doc = new PDFDocument;
    //       doc.pipe(fs.createWriteStream('public/files/forms/'+user.email+'/'+n+'.pdf'));
           
    //       // Add an image, constrain it to a given size, and center it vertically and horizontally
    //       doc.image('public/img/class-xi form image.jpg',0,0, {
    //           fit:[615,785],
    //           align: 'center',
    //           valign: 'center'
    //        })
    //        .fontSize(12)
    //        .text(user.eleven.name,75,120)
    //        .text(user.eleven.dob,100,135)
    //        .text(user.eleven.category,100,150)
    //        .text(user.eleven.yop,180,185)
    //        .text(user.eleven.school,300,185)
    //        .text(user.eleven.nob,130,200)
    //        .text(user.eleven.agg,350,217)
    //        .text(user.eleven.maths,90,234)
    //        .text(user.eleven.science,190,234)
    //        .text(user.eleven.ceng,90,251)
    //        .text(user.eleven.cmaths,190,251)
    //        .text(user.eleven.stream,90,300)
    //        .text(user.eleven.one,100,363)
    //        .text(user.eleven.two,100,378)
    //        .text(user.eleven.three,100,393)
    //        .text(user.eleven.four,210,363)
    //        .text(user.eleven.five,210,378)
    //        .text(user.eleven.six,210,393)
    //        .text(user.eleven.cone,360,363)
    //        .text(user.eleven.ctwo,360,378)
    //        .text(user.eleven.cthree,360,393)
    //        .text(user.eleven.cfour,470,363)
    //        .text(user.eleven.cfive,470,378)
    //        .text(user.eleven.csix,470,393)
    //        .text(user.eleven.email,410,415)
    //        .text(user.eleven.father,130,435)
    //        .text(user.eleven.mother,130,451)
    //        .text(user.eleven.Occupation,440,435)
    //        .text(user.eleven.phno,440,450)
    //        .text(user.eleven.adress,90,480)
    //        .text(user.eleven.father,90,550)
    //        .text(user.eleven.name,370,550)
    //        .text(user.eleven.phno,130,610)
    //        doc.end();
    //        var file='public/files/forms/'+n+'.pdf'
    //        res.download(file)
    //    }
          }
          
    })
    
    
 })
 var razorpay = new Razorpay({
    key_id: 'rzp_test_43bZgZ9iXkf7MQ',
    key_secret: 'fqvE4SoXoXbQawcImLT0Sxey'
  })
 router.post('/payment',async(req,res)=>{
    
    const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: 'id',
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
 })
 router.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

module.exports = router;