app.controller('LoginController', LoginController);

LoginController.$inject = ["$rootScope", "$scope", "$firebaseAuth", "$location", "service"];

function LoginController($rootScope, $scope, $firebaseAuth, $location, service) {
  $scope.$on('setLoginStatus', function(event, data) {
      $scope.status = data;
      $scope.email = service.getEmail();
  });
    $scope.SignIn = function(event) {
        event.preventDefault();
        service.SignIn($scope.user).then(function(firebaseUser) {
            service.setEmail(firebaseUser.email);
            $rootScope.$broadcast('setLoginStatus', true);
            $location.path('/list');
        }).catch(function(error) {
            console.error("Authentication failed:", error);
        });
    };
};
