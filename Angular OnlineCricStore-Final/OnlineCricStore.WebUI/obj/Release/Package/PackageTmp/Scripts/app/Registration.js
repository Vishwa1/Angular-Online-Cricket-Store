
appRoot.controller('RegisterController', function ($scope, $http, $location, $resource, $routeParams) {

    debugger;

    $scope.Register = {};

    $scope.sendForm = function () {
        debugger;
        $http({
            method: 'POST',
            url: '/Account/SignUp/',
            data: $scope.Register
        }).success(function (data, status, headers, config) {
            $scope.message = '';
            $scope.errors = [];
            if (data.success === false) {
                $scope.errors = data.errors;
            }
            else {
                $scope.message = ' Successfully Register';
                //$route.reload();
               //$location.url('/Home');
                window.location.href = "#/Home";
                window.location.reload();
                
            }
        }).error(function (data, status, headers, config) {
            $scope.errors = [];
            $scope.message = 'Unexpected Error';
        });
    };

});