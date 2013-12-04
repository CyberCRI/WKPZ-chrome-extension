chrome.webNavigation.onCommitted.addListener(function (e){

  console.log("coucou");
  console.log(e)

  e.time = e.timeStamp;


  $.post("http://api.wkpdz.11d.im/steps", e);

}, { url : [
  { hostSuffix : "wikipedia.org" }
]});