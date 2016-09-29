app.controller('userController', ['$scope', '$location', 'UserFactory', function($scope, $location, UserFactory){
	
	var today = new Date();
  	var minAge = 18;
  	$scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
	

	$scope.create = function(user){
		UserFactory.create(user, function(){
			$location.url('/show_profile');
		})
	}
	$scope.login = function(user){
		UserFactory.login(user,function(){
			$location.url('/show_profile');
		})
	}
}])