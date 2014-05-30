
appRoot.controller('ContactController', function ($scope, $http, $location, $resource, $routeParams) {

    debugger;

    $scope.Contact = {};

    $scope.sendForm = function () {
        debugger;
        $http({
            method: 'POST',
            url: '/Home/Contact/',
            data: $scope.Contact
        }).success(function (data, status, headers, config) {
            $scope.message = '';
            $scope.errors = [];
            if (data.success === false) {
                $scope.errors = data.errors;
            }
            else {
                $scope.message = ' Contact Inserted Successfully';
                

            }
        }).error(function (data, status, headers, config) {
            $scope.errors = [];
            $scope.message = 'Unexpected Error';
        });
    };

});