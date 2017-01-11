var antaryami = angular.module('antaryami',[]);

antaryami.controller('BuildInfoController',function($http, $scope,selectedEnv,selectedApp){
    $http.get("https://antaryami.herokuapp.com/posts/meditation")
            .then(function(response) {
              $scope.medPosts = response.data;
            });
});