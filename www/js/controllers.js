angular.module('starter.controllers', [])

.controller('hinduismCtrl', ['$scope','$log','$http',function($scope,$log,$http){
	
	  $scope.$log = $log;
	 $http.get("https://antaryami.herokuapp.com/posts/meditation")
                                         .then(function successCallback(response) {
                                                  $scope.medPosts = response.data;
                                         }, function errorCallback(response) {
                                             $scope.medError = "Something's wrong! Please check if the app is running";
                                           });
}])

.controller('medCtrl',['$scope','$log','$http',function($scope,$log,$http){
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

 // $scope.chats = Chats.all();
 // $scope.remove = function(chat) {
 //   Chats.remove(chat);
  //};
   
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('YogaCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
