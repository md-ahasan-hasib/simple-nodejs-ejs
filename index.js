const express = require('express');
const router = express.Router();
const User = require('../db/model');

router.get('/reg', (req, res) => {
   res.render('reg');
});
router.get('/', (req, res)=>{
   User.find({}, function(err, user){
      if(err){
         console.log('Not Found any data');
      }
      else{
         res.render('index', {user:user})
      }
   })
});
router.get('/show/:_id', (req, res)=>{
   User.findById(req.params._id, function(err, user){
      if(err){
         console.log('Not Found any data');
      }
      else{
         res.render('show', {userInfo:user})
      }
   })
});
router.get('/edit/:_id', (req, res)=>{
   User.findById(req.params._id, function(err, user){
      if(err){
         console.log('Not Found any data');
      }
      else{
         res.render('edit-form', {userInfo:user})
      }
   })
});
router.post('/reg', async (req, res) => {
   const user = new User({
      name : req.body.name,
      address : req.body.address,
      age : req.body.age,
      phone : req.body.phone,
      bio : req.body.bio
   })
   await user.save();
   if (!user) {
      console.log('Try again');
   } else {
      res.redirect('/');
   }
});
router.post('/edit/:_id', (req, res)=>{
   const editUserInfo = {
      address:req.body.address,
      phone: req.body.phone,
      bio:req.body.bio
   }
   User.findByIdAndUpdate(req.params._id, editUserInfo, (err)=>{
      if(err){
         res.redirect('edit/' + req.params._id);
      }
      else{
         res.redirect('/');
      }
   })
})

router.get('/delete/:_id',(req, res)=>{
   User.findOneAndDelete(req.params._id, (err, user)=>{
      if(!err){
         res.redirect('/');
         console.log('Record deleted');
      } else{
         console.log('Can not delete' +err);
      }
   })
})



module.exports = router;