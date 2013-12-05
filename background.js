chrome.webNavigation.onCommitted.addListener(function (e){

  chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
    // Use the token.
    console.log(token);

    console.log("coucou");
    console.log(e)

    e.time = e.timeStamp;

    $.post("http://api.wkpdz.11d.im/steps", e);
  });

}, { url : [
  { hostSuffix : "wikipedia.org" }
]});


