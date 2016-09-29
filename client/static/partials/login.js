<div ng-controller='userController'>
	<form action="users/login" method="post" id="login">
		<fieldset>
			<legend> Login</legend>
			<p>
				<label for="email">Email:</label>
				<input type="text" ng-model='user.email'name="email" id="email">
			</p>
			<p>
				<label for="password">Password</label>
				<input type="password" ng-model='user.password' name="password" id="password">
			</p>
			<p>
				<button ng-click='login(user)'>Login</button>
			</p>
		</fieldset>
	</form>
	<div ng-repeat='error in err'>
	<p>{{error}}</p>
	</div>
</div>
