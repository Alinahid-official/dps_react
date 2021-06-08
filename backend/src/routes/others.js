var express=require('express')
var Notice = require('../models/notice');
const router= express.Router();
const path = require('path');
const GalleryImage =require('../models/gallery');
const fs = require('fs-extra');
var sharp = require('sharp');
 
router.post('/uploadNotice',(req,res)=>{
  let notice =req.files.notice;
  let {title} =req.body;
  const url =`http://localhost:4000/notices/${notice.name}`
  const p=path.join(__dirname,'../../',`/public/notices/${notice.name}`)
  notice.mv(p,err=>{
    if(err){res.status(404).json({msg:'try again'})}
    else{
      const notice =new Notice({
        title:title,
        url:url
      })
      notice.save().then(() => {
        res.status(200).json({msg:'uploaded'})
      })
     
    }
  })

})

 
// router.get('/:name',function(req,res){
//     var file='public/files/notices/'+req.params.name;
//     res.download(file);
//   })
router.get('/noticelist',(req,res)=>{
 
    Notice.find({},(err,notices)=>{
      res.status(200).json({notices})
      
    })
    
  })
//   router.get('/admin/notice',isAdmin,function(req,res){
//     Notice.find({},function(err,notices){
//       res.render('admin_notice',{
//         notices:notices
//       }
      
//       )
      
//     })
    
//   })
//   router.get('/delete/:id',function(req,res){
//     var id =req.params.id
//     Notice.findOne({_id:id},function(err,user){
//       var file='public/files/notices/'+user.title;
//       fs.remove(file);
//     })
//     Notice.findByIdAndRemove(id, function (err) {
//       if(err){
//         res.send(err)
//       }else{
//         res.redirect('/notice/admin/notice')
//       }
//     });
    
//   })
router.post('/uploadGalleryImage',(req,res)=>{
  let image =req.files.image;
  
  let {category} =req.body;
  const url =`http://localhost:4000/gallery/${image.name}`
  const turl =`http://localhost:4000/gallery/t${image.name}`
  const p=path.join(__dirname,'../../',`/public/gallery/${image.name}`)
  const tp=path.join(__dirname,'../../',`/public/gallery/t${image.name}`)

  image.mv(p,err=>{
    if(err){console.log(err)}
    else{
      const notice =new GalleryImage({
        title:image.name,
        url:url,
        turl:turl,
        category:category
      })
      notice.save().then(() => {
        res.status(200).json({msg:'uploaded'})
      })

    }
  }) 
  sharp(image.data)
 .resize({ width: 75,height: 75 })
 .toFile(tp)
 
})
router.post('/galleryImages',(req,res)=>{
  const {category}=req.body
 
  if(category=='all'){
    GalleryImage.find({},(err,images)=>{
      if(err){res.status(404).json({msg:'Something went wrong please try again'})}
      else{
      
        res.status(200).json(images)
      }
    })

   }else{
    GalleryImage.find({category:category},(err,images)=>{
      if(err){res.status(404).json({msg:'Something went wrong please try again'})}
      else{
        res.status(200).json(images)
      }
    })
  
   }
  })
  router.post('/deleteImage/',(req,res)=>{
    const {id,name}=req.body
 
    const p=path.join(__dirname,'../../',`/public/gallery/${name}`)
    const tp=path.join(__dirname,'../../',`/public/gallery/t${name}`)
    
    fs.remove(p)
    fs.remove(tp)
    
    GalleryImage.findByIdAndDelete(id,function(err){
        if(err){
            console.log(err)
        }else{
            res.status(200).json({msg:'sucessfully deleted'})
        }
    })
})

  module.exports = router;