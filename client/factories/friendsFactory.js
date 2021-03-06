
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        // console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(id, editfriend, callback){ // what parameters do we need?
    
      $http.put('/friends/' + id,  editfriend).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data)
        }
      })
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        // console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){// what parameters do we need?
     
      $http.delete('/friends/' + id).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data)
        }
      })
   
    };
    this.show = function(id, callback){// what parameters do we need?
   
        $http.get('/friends/' + id).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data)
        }
        })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(_id, callback){
 
      for(var i = 0; i < friends.length; i++)
      {
        if(friends[i]._id === _id)
        {
          friend = friends[i];
          break;
        }
      }
      
        callback(friend);
    };
  }
  // console.log(new FriendsFactory());
  return new FriendsFactory();
}]);