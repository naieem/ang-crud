app.controller('LoginController', LoginController);

LoginController.$inject = ["$scope", "$firebaseAuth", "$location"];

function LoginController($scope,$firebaseAuth,$location){
  // var products = new Firebase(FBURL);
  // $scope.products = $firebaseArray(products);
  //
  // $scope.removeProduct = function(id) {
  //   var ref = new Firebase(FBURL + id);
  //   var product = $firebaseObject(ref)
  //   product.$remove();
  //  };
  var auth = $firebaseAuth();
  $scope.signIn = function() {
    // auth.signInWithEmailAndPassword("hello@gmail.com", "123456")
    // .then(function(res){
    //   console.log(res);
    //   $scope.email = res.email;
    //   $scope.$digest();
    // },
    // function(error){
    //   console.log(error);
    // });
    auth.$signInWithEmailAndPassword("hello@gmail.com", "123456").then(function(firebaseUser) {
      console.log(firebaseUser);
      console.log("Signed in as:", firebaseUser.uid);
      $scope.email=firebaseUser.email;
      $location.path('/list')
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  };
};
