var mongoose = require('mongoose')
var Friend = mongoose.model('Friend')

function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err,data){
      res.json(data)

    })
  };
  this.create = function(req,res){
    Friend.create(req.body, function(err, data){
      if (err){
        console.log(err)
        res.json(err)
      }
      else{
        res.json(data)
      }
      
    })
  };
  this.update = function(req,res){

    Friend.findOne({_id: req.params.id }, function(err, friend){
      if (err){
        console.log(err)
      }
      else{
        friend.first_name = req.body.first_name;
        friend.last_name = req.body.last_name;
        friend.birthday = req.body.birthday;
        friend.save(function (err, updatedfriend){
          if (err){
            console.log(err)
          }
          else{
            res.json(updatedfriend)
          }
        })
       
      }
    })
  };
  this.delete = function(req,res){
    Friend.remove({_id: req.params.id}, function (err, data){
      if (err){
        console.log(err)
      }
      else{
        res.json({message: "it is done.."})
      }
    })
  };
  this.show = function(req,res){
    console.log('show method server controller')
    Friend.findOne({_id: req.params.id}, function (err, data){
      if (err){
        console.log(err)
      }
      else{
        
        res.json(data)
      }
    })
  };
}
module.exports = new FriendsController(); // what does this export?