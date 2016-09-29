app.factory('UserFactory', ['$http', function($http){
	var user = {data:[]}
	return{
		create:function(user, callback){
			$http({
				method:"POST",
				url:"/register",
				data:user
			}).then(function(user){
				callback()
			})
		},
		login:function(user,callback){
			$http({
				method:"POST",
				url:"/login",
				data:user
			}).then(function(user){
				callback();
			})
		},
		loggedIn: function(callback){
			$http({
				method:"GET",
				url:'/userLogged'
			}).then(function(res){
				callback(res.data);
			})
		},
		update: function(callback){
			$http({
				method:"POST",
				url:'/profile'
			}).then(function(user){
				callback(res.data);
			})
		}
	}
}])