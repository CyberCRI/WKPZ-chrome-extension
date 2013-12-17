var oauth_token = null;

var current_user = {};


chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
  console.log(token)

    
  if(token){
    oauth_token = token;

    $('#signin').hide();

    $('#signout').on("click", function(event){
      event.preventDefault();
      signout({ token: token });
    });


    oAuthPlusMe(token, function(me){
      current_user = me;

      console.log(me);

      $("#info .name").html(me.displayName);
      $("#info .avatar img").attr("src", me.image.url);
    });


  } else {
    $('#info').hide();
  }

});