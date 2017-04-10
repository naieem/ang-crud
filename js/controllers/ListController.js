app.controller('ListController', ListController);

ListController.$inject = ['$scope', 'service'];

function ListController($scope, service) {
    $scope.products = service.getList();
    $scope.removeProduct = function(data) {
        service.removeList(data).then(function() {
            console.log("hello");
        }, function(error) {
            console.log(error);
        });
    };
};
