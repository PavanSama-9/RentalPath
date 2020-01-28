import React from 'react'
/*global FB*/
class Logout extends React.Component{

    loadFbLoginApi() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: 138808123377041,
                cookie: true,
                autoLogAppEvents: true,
                status: true,
                xfbml: true,
                version: 'v2.11'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
     handleFBLogout() {
      FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                if (FB.getAccessToken() != null) {
                    FB.logout(function (response) {
                        console.log("User logged out Successfully")
                        localStorage.removeItem('userData');
                        localStorage.removeItem('Favorite');
                        if (localStorage.getItem("userData") === null ) {
                            window.location.href = '/';

                        }
                    });
                }
            }
        });
}
}
export default Logout;