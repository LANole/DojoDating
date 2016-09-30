app.controller('userController', ['$scope', '$location', 'UserFactory', function($scope, $location, UserFactory){
	
	var today = new Date();
  	var minAge = 18;
  	$scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
	

	$scope.login = function(user){
		UserFactory.login(user,function(){
			$location.url('/profile/:id');
		})
	}
	$scope.create = function(user){
		UserFactory.create(user, function(){
			$location.url('/create');
		})
	}
	$scope.update = function(user){		
		UserFactory.update(user,function(){
			$location.url('/profile');
		})
	}
}])