
appRoot.controller('ManageController', function ($scope, $http, $location, $resource, $routeParams) {

    debugger;

    $scope.Password = {};

    $scope.sendForm = function () {
        debugger;
        $http({
            method: 'POST',
            url: '/Account/Manage/',
            data: $scope.Password
        }).success(function (data, status, headers, config) {
            $scope.message = '';
            $scope.errors = [];
            if (data.success === false) {
                $scope.errors = data.errors;
            }
            else {
                $scope.message = 'Password Successfully Updated.';
                //$location.url('/Home');

                //window.location.href = "/Home";
            }
        }).error(function (data, status, headers, config) {
            $scope.errors = [];
            $scope.message = 'Unexpected Error';
        });
    };

});