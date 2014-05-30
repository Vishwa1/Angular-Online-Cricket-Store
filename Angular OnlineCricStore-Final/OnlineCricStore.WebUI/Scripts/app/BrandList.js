
appRoot.controller('ProductController', function ($scope, $http, $location, $resource, $routeParams) {
  
    $scope.products = [];
    

    var resultPromise = $http.get("/Product/GetProduct?BrandId=" + $routeParams.BrandId);
    resultPromise.success(function (data) {
        $scope.products = data;
        
    });
   

    $scope.ignoreAccents = function (item) {
        
        item.ThumbnailPath=item.ThumbnailPath.replace(/~/, '');
        return item;
    };

    $scope.Details = function (id) {
      
        $location.url('/Product/Details/' + id);
    }
    //$scope.details = function (e) {
    //    onClick(e, function ( dataItem) {
    //        $location.url('/customer/edit/' + dataItem.CustomerID);
    //    });
    //};

});