function post_step(step){
  $.post("http://api.wkpdz.11d.im/steps", step);

  // $http({
  //   method: 'POST',
  //   url: 'http://api.wkpdz.11d.im/steps',
  //   data: step
  // });
}


console.log("meu");

chrome.webNavigation.onCommitted.addListener(function (e){

  chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
    // Use the token.
    console.log(token);

    // console.log("coucou");
    // console.log(e)


    oAuthPlusMe(token, function(me){
      console.log("me: ", me)

      e.userId = me.id;
      e.time    = e.timeStamp;

      console.log(e);

      post_step(e);

    });
  });

}, { url : [
  { hostSuffix : "wikipedia.org" }
]});