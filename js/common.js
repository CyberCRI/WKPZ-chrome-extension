function signout(token){

  console.log("logging out...")

  chrome.identity.removeCachedAuthToken(token, function(){});

}

function oAuthPlusMe(token, callback){
  $.get("https://www.googleapis.com/plus/v1/people/me",{
    "access_token": token
  }, callback);
}