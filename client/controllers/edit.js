app.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, rParams, $location) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial - 
    so we didn't set a variable so we could reuse it - 
    we just run the friendsFactory method directly.
  */
  
 // this method makes a db call 
   friendsFactory.show(rParams._id, function(returnedData){
     $scope.friend = returnedData;
    
   });
 // We can use this method to get friend without using a db call
     friendsFactory.getFriend(rParams._id, function(returnedData){
     $scope.friend = returnedData;
    
   });



	$scope.update = function(){
       
   						friendsFactory.update(rParams._id, $scope.editFriend, function(returnedData){
							$location.url('/')

						})

						
	}


	$scope.delete = function(id){
				
   						friendsFactory.delete(
						id, function(returnedData){
							$location.url('/')

						})
						
						
}
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method 
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see 
    all of the friends when we get back including the updated on??  
    See Index in the previous controller.
  */
}]);