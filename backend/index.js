const bodyParser = require('body-parser');
const cors=require('cors');
const flash = require('connect-flash');
const passport = require('passport');
const express = require('express');
const fileUpload = require('express-fileupload')
const session = require('express-session');
const mongoose = require('mongoose');
const auth = require('./src/routes/auth');
const app = express();
const admission = require('./src/routes/admission');
const others= require('./src/routes/others')
app.use(fileUpload())
app.use(express.static("public"))
app.use(cors());
app.use(bodyParser.urlencoded({
    extended : true
  }))
// parse application/json
app.use(bodyParser.json());
require('./config/passport')(passport);
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    // cookie: { secure: true }
  }))
// passport middleware
app.locals.errors = null;
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
  // app.use(function (req, res, next) {
  //   res.locals.messages = require('express-messages')(req, res);
  //   next();
  // })
  app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
  
app.use('/auth',auth);
app.use('/',admission);
app.use('/',others)
const port = 4000
// listen to the server at 3000 port
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})
mongoose.connect('mongodb+srv://dps:dps@123@cluster0.harcc.mongodb.net/Cluster0?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex :true
})