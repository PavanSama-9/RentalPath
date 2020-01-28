import React, { Component } from 'react';
import '../assets/css/App.css';

/*global FB*/
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginError: false,
			redirect: false,
			userLoggedIn:false
		};

		this.handleFBLogin = this.handleFBLogin.bind(this);
	}
	loadFbLoginApi() {
		window.fbAsyncInit = function () {
			FB.init({
				appId: 826831274413873,
				cookie: true,
				autoLogAppEvents: true,
				status: true,
				xfbml: true, 
				version: 'v2.11'
			});
		};
		console.log("Loading fb api");
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}
	componentDidMount() {
		this.loadFbLoginApi();
	}
	handleFBLogin() {
		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				console.log("user logged in")	
			} else if (response.status === 'not_authorized') {
				console.log("user logged in but not authorized")
			} else {
				console.log("please login......")
			}
		});
		FB.login(function (response) {
			if (response.authResponse) {
				console.log('Welcome!  Fetching your information.... ');
				FB.api('/me', 'GET', { fields: 'id,name,email,picture' }, function (response) {
					localStorage.setItem("userData", JSON.stringify(response));
					console.log('Good to see you, ' , response);
					if (localStorage.getItem('userData') != null) {
						window.location.href = '/home';
					}
				});
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		})
	}
	render() {
	
		return (
			<div className="Container">
				<div className="omb_login">
					<h3 className="omb_authTitle">Login Form</h3>
					<div className="row omb_row-sm-offset-3 omb_loginOr">
						<div className="col-xs-12 col-sm-6">
							<hr className="omb_hrOr"></hr>
						</div>
					</div>
					<div className="row omb_row-sm-offset-3">
						<div className="col-xs-12 col-sm-6">
							<form className="omb_loginForm" >
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user"></i></span>
									<input type="text" className="form-control" name="username" placeholder="Email address" />
								</div>
								<span className="help-block"></span>
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock"></i></span>
									<input type="password" className="form-control" name="password" placeholder="Password" />
								</div>
								<span className="help-block"></span>
								<button className="btn btn-lg btn-primary btn-block">Login</button>
							</form>
							<div className="HomePage">
								<button
									className="loginBtn loginBtn--facebook"
									onClick={this.handleFBLogin}
									>Login with Facebook
								</button>
							</div>
						</div>
					</div>

				</div>
				<div>

				</div>
			</div>
		);
	}
}
export default Login;
