<div ng-controller='userController'>
<h1>Welcome</h1>
		
		<form method="post">
			<fieldset>
				<legend>Register</legend>
				<p>
					<label for="name">Name:</label>
					<input type="text" name="name" ng-model='user.name'>
				</p>
				<p>
					<label for="email">Email:</label>
					<input type="text" name="email" ng-model='user.email'>
				</p>
				<p>
					<label for="passsword">Password:</label>
					<input type="password" name="password" ng-model='user.password'>
				</p>

				<p>
					<label for="confirm_password">Confirm password:</label>
					<input type="password" name="confirm_password" ng-model='user.confirm_password'>
				</p>
				<p>
					<label for="dob">Date of Birth:</label>
					<input type="date" name="dob" max="{{minAge | date:'yyyy-MM-dd'}}" ng-model='user.dob'</input>
				</p>
				<p>
					<button>Register</button>
				</p>
				
			</fieldset>
		</form>
</div>