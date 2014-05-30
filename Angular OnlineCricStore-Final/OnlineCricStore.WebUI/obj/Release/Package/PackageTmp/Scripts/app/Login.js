
appRoot.controller('LoginController', function ($scope, $http, $location, $resource, $routeParams, $route) {

    debugger;
      
       $scope.User = {
           UserName: "",
           Password: "",
           RememberMe:0
       };
       $scope.active = false;

       $scope.sendForm = function () {
           debugger;
        $http({
            method: 'POST',
            url: '/Account/GetLogin/',
            data: $scope.User
        }).success(function (data, status, headers, config) {
            $scope.message = '';
            $scope.errors = [];
            if (data.success === false) {
               // $scope.errors = data.errors;
                $scope.message = 'Invalid Login';
            }
            else {
                $scope.message = 'Login Successfully';
                $scope.User = $scope.User;
              
                window.location.href = "#/Home";
                window.location.reload();
               //$location.url('/Home');
               
            }
        }).error(function (data, status, headers, config) {
            $scope.errors = [];
            $scope.message = 'Unexpected Error';
        });
    };

});