app.controller('AddController', AddController);

AddController.$inject = ['$scope', '$location', 'service'];

function AddController($scope, $location, service) {
    $scope.addProduct = function() {
        console.log($scope.product.date);
        // service.add($scope.product).then(function(res) {
        //     console.log("added");
        //     $location.path('/list');
        // }, function(error) {
        //     console.log(error);
        // });
    };

};
