appRoot.controller('SearchByCategoryController', function ($scope, $http, $location, $resource, $routeParams) {

    $scope.products = [];


    var resultPromise = $http.get("/Search/GetSearchByCategory?SearchString=" + $routeParams.SearchString);
    resultPromise.success(function (data) {
        $scope.products = data;

    });

    $scope.ignoreAccents = function (item) {

        item.ThumbnailPath = item.ThumbnailPath.replace(/~/, '');
        return item;
    };
    $scope.Details = function (id) {

        $location.url('/Product/Details/' + id);
    };


});