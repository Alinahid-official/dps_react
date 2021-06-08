const mongoose=require('mongoose')


var gallerySchema = mongoose.Schema({

    title: {
      type: String,
      require: true
    },
    url:{
      type: String,
      require: true
    },
    turl:{
      type: String,
      require: true
    },
    category:{
        type: String,
    }
  
  });
  const GalleryImage = mongoose.model("Gallery", gallerySchema);
  module.exports = GalleryImage;