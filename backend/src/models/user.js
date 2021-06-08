const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    approved:{
        type:Boolean
    },
    sinfo:{
        type:Boolean
    },
    sfile:{
        type:Boolean
    },

    verified:{
        type:Boolean
    },
    passport_image:{
        type:String
    },
    father_sign:{
        type:String
    },
    mother_sign:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    password:{
        type:String
    },
    class:{
        type:String
    },
    name:{
        type:String
    },
    dob:{
        type:String
    },
    nationality:{
        type:String
    },
    religion:{
        type:String
    },
    gender:{
        type:String
    },
    father_name:{
        type:String
    },
    father_occupation:{
        type:String
    },
    father_designation:{
        type:String
    },
    father_annaualIncome:{
        type:String
    },
    father_phnumber:{
        type:String
    },
    father_academicQualification:{
        type:String
    },
    father_organisationalAdress:{
        type:String
    },
    father_residentialAdress:{
        type:String
    },
    mother_name:{
        type:String
    },
    mother_occupation:{
        type:String
    },
    mother_designation:{
        type:String
    },
    mother_annaualIncome:{
        type:String
    },
    mother_phnumber:{
        type:String
    },
    mother_academicQualification:{
        type:String
    },
    mother_organisationalAdress:{
        type:String
    },
     
    home_town:{
        type:String
    },
    State:{
        type:String
    },
    country:{
        type:String
    },
    permanent_address:{
        type:String
    },
    temporary_address:{
        type:String
    },
    child_one:{
        type:String
    },
    admsn_one:{
        type:String
    },
    class_one:{
        type:String
    },
    remarks_one:{
        type:String
    },
    child_two:{
        type:String
    },
    admsn_two:{
        type:String
    },
    class_two:{
        type:String
    },
    remarks_two:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    staff:{
        type:String
    },
    previous_school:{
        type:String
    },
    previous_class:{
        type:String
    },
    previous_position:{
        type:String
    },
    previous_medium:{
        type:String
    },

    profiency:{
        type:String
    },
})
const User = mongoose.model('User',userSchema);
module.exports = User;