
appRoot.controller('ProductDetailsController', function ($scope, $http, $location, $resource, $routeParams) {

    var result = $http.get("/Product/GetDetails/" + $routeParams.id);
    result.success(function (data) {
        
        $scope.productDetails = ignoreAccents(data);
       
    });
   
    function ignoreAccents(item) {
        item.ThumbnailPath = item.ThumbnailPath.replace(/~/, '');
        return item;
    }
  

    $scope.Basket = function (id) {
       
        $location.url('/Basket/AddToBasket/' + id);
    }

    $scope.Back = function (id) {
      
        $location.url('/Shoes/' + id);
    }

});