chrome.webNavigation.onCommitted.addListener(function (e){

  console.log("coucou");

}, { url : [
  { hostSuffix : "wikipedia.org" }
]});