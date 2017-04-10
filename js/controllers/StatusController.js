app.controller('StatusController', StatusController);

StatusController.$inject = ["$rootScope", "$scope", "service", "$location", "$firebaseAuth"];

function StatusController($rootScope, $scope, service, $location, $firebaseAuth) {
    var auth = $firebaseAuth();
    $scope.$on('setLoginStatus', function(event, data) {
        $scope.status = data;
        $scope.email = service.getEmail();
    });
    var email=service.setEmail("");
    if(email==""){
      $location.path('/login');
    }
    auth.$onAuthStateChanged(function(user) {
        if (user) {
          console.log("logged in");
          service.setEmail(user.email);
          $rootScope.$broadcast('setLoginStatus', true);
        } else {
          console.log("logged out");
            service.setEmail("");
            $rootScope.$broadcast('setLoginStatus', false);
            $location.path('/login');
        }
    });
    $scope.signOut = function(ev) {
      ev.preventDefault();
        service.logout().then(function(res) {
          console.log("logged out");
        }, function(error) {
            console.log(error);
        });
    }
};
