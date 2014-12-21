angular.module('Instagram')
  .controller('HomeCtrl', function($scope, $window, $rootScope, $auth) {
 
    $scope.isAuthenticated = function() {
    	return $auth.isAuthenticated();
    };
 
    $scope.linkInstagram = function() {
      $auth.lin('instagram')
      	.then(function(response) {
      		$window.localStorage.currentUser = JSON.stringify(repsonse.data.user);
      		$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
      	});
    };
 
});
