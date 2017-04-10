app.controller('EditController', EditController);

EditController.$inject = ['$scope', '$location', '$routeParams', 'service'];

function EditController($scope, $location, $routeParams, service) {
    $scope.product = service.getById($routeParams.id);
    $scope.editProduct = function(data) {
        service.update(data).then(function(res) {
            console.log("updated");
            $location.path('/list');
        }, function(error) {
            console.log(error);
        });
    };

}
