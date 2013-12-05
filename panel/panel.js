var oauth_token = null;


function signout(token){

  console.log("logging out...")

  chrome.identity.removeCachedAuthToken(token, function(){});

}

function oAuthPlusMe(callback){
  $.get("https://www.googleapis.com/plus/v1/people/me",{
    "access_token": oauth_token
  }, callback);
}


chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
  console.log(token)

    
  if(token){
    oauth_token = token;

    $('#signin').hide();

    $('#signout').on("click", function(event){
      event.preventDefault();
      signout({ token: token });
    });


    oAuthPlusMe(function(me){
      $("#info .name").html(me.displayName);
      $("#info .avatar img").attr("src", me.image.url);
    });


  } else {
    $('#info').hide();
  }

});