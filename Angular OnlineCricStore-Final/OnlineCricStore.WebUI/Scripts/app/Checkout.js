
appRoot.controller('CheckoutController', function ($scope, $http, $location, $resource, $routeParams) {
  
    $scope.CheckoutUser = {};
    //$scope.Update = function (CheckoutUser) {
      
    //    $location.url('/Basket/CompletedOrder');
    //}

    $scope.sendForm = function () {
        $http({
            method: 'POST',
            url: '/Basket/Checkout',
            data: $scope.CheckoutUser
        }).success(function (data, status, headers, config) {
            $scope.message = '';
            if (data.success == false) {
                $scope.errors = data.errors;
            }
            else {
                $location.url('/Basket/CompletedOrder');
            }
        }).error(function (data, status, headers, config) {
            $scope.message = 'Unexpected Error';
        });
    };

});