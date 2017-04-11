app.controller('AddController', AddController);

AddController.$inject = ['$scope', '$location', 'service'];

function AddController($scope, $location, service) {
    $scope.addProduct = function() {
      var x=new Date($scope.product.fulldate);
      console.log(x.toString());
        // service.add($scope.product).then(function(res) {
        //     console.log("added");
        //     $location.path('/list');
        // }, function(error) {
        //     console.log(error);
        // });
    };

};
