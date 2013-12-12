function signout(token){

  console.log("logging out...")

  chrome.identity.removeCachedAuthToken(token, function(){});

}

function oAuthPlusMe(token, callback){

  // JQuery
  $.get("https://www.googleapis.com/plus/v1/people/me",{
    "access_token": token
  }, callback);

  // Angular
  // $scope.$apply(function(){
  //   $http({
  //     method: 'GET',
  //     url: "https://www.googleapis.com/plus/v1/people/me",
  //     params: { access_token: token }
  //   })
  //   .success(function(data, status, headers, config){
  //     console.success("error");
  //     console.log(data);
  //     callback(data);
  //   });
  // });
}