
appRoot.controller('BasketController', function ($scope, $http, $location, $resource, $routeParams) {
  
    
    var result = $http.get("/Basket/GetProductBasket/"+ $routeParams.id+"?returnUrl=/Product/Details/" + $routeParams.id);
    result.success(function (data) {
       
        $scope.Busket = data.Basket;
        $scope.TotalPrice = data.TotalPrice;
        $scope.ReturnUrl = data.ReturnUrl;
    });
   
 
    $scope.RemoveBasket = function (id) {
        var result = $http.get("/Basket/RemoveProductBasket/" + id + "?returnUrl=/Product/Details/" + id);
        result.success(function (data) {
            $scope.Busket = data.Basket;
            $scope.TotalPrice = data.TotalPrice;
            $scope.ReturnUrl = data.ReturnUrl;
        });
    }

    $scope.Checkout = function () {
       
        $location.url('Basket/Checkout');
    }

    $scope.Back = function (url) {
      
        $location.url(url);
    }
});