// Main configuration file. Sets up AngularJS module and routes and any other config objects

var appRoot = angular.module('main', ['ngRoute', 'ngGrid', 'ngResource', 'angularStart.services', 'angularStart.directives']);     //Define the main module

appRoot
    .config(['$routeProvider', function ($routeProvider) {
        debugger;
        //Setup routes to load partial templates from server. TemplateUrl is the location for the server view (Razor .cshtml view)
        $routeProvider
            .when('/Adidas/:BrandId', { templateUrl: '/Product/BrandList?BrandId=1', controller: 'ProductController' })
            .when('/Gray-Nicolls/:BrandId', { templateUrl: '/Product/BrandList?BrandId=2', controller: 'ProductController' })
            .when('/Kookaburra/:BrandId', { templateUrl: '/Product/BrandList?BrandId=3', controller: 'ProductController' })

            .when('/KookaBurra/:BrandId', { templateUrl: '/Product/BrandList?BrandId=4', controller: 'ProductController' })
            .when('/GM Balls/:BrandId', { templateUrl: '/Product/BrandList?BrandId=5', controller: 'ProductController' })
            .when('/SG Balls/:BrandId', { templateUrl: '/Product/BrandList?BrandId=6', controller: 'ProductController' })

            .when('/Thigh Pads/:BrandId', { templateUrl: '/Product/BrandList?BrandId=7', controller: 'ProductController' })
            .when('/BrandList/:BrandId', { templateUrl: '/Product/BrandList?BrandId=8', controller: 'ProductController' })
            .when('/Helmets/:BrandId', { templateUrl: '/Product/BrandList?BrandId=9', controller: 'ProductController' })
            .when('/Bat Cover/:BrandId', { templateUrl: '/Product/BrandList?BrandId=10', controller: 'ProductController' })

            .when('/Leg Guards/:BrandId', { templateUrl: '/Product/BrandList?BrandId=11', controller: 'ProductController' })
            .when('/Shoes/:BrandId', { templateUrl: '/Product/BrandList?BrandId=12', controller: 'ProductController' })
            .when('/Sunglasses/:BrandId', { templateUrl: '/Product/BrandList?BrandId=13', controller: 'ProductController' })
            .when('/Cricket Clothing/:BrandId', { templateUrl: '/Product/BrandList?BrandId=14', controller: 'ProductController' })

            .when('/SearchByBrand/:SearchString', { templateUrl: '/Search/SearchByBrand', controller: 'SearchByBrandController' })
            .when('/SearchByCategory/:SearchString', { templateUrl: '/Search/SearchByCategory', controller: 'SearchByCategoryController' })
            //.when('/Bats', { redirectTo: '/home' })
            //.when('/Ball', { redirectTo: '/home' })
            //.when('/Accessories', { redirectTo: '/home' })
            //.when('/Brands', { redirectTo: '/Home/Index' })
            .when('/Home', { templateUrl: '/Home/Main', controller: 'MainController' })
            

            .when('/About', { templateUrl: '/Home/About', controller: 'AboutController' })
            .when('/Contact', { templateUrl: '/Home/Contact', controller: 'ContactController' })
            .when('/Career', { templateUrl: '/Home/Career', controller: 'CareerController' })

            .when('/Account/Login', { templateUrl: '/Account/Login', controller: 'LoginController' })
            .when('/Account/Register', { templateUrl: '/Account/Register', controller: 'RegisterController' })
            .when('/Account/Manage', { templateUrl: '/Account/Manage', controller: 'ManageController' })

            .when('/Product/Details/:id',
            {
                templateUrl: '/Product/Details/',
                controller: 'ProductDetailsController'
            })

            .when('/Basket/AddToBasket/:id',
            {
                templateUrl: '/Basket/AddToBasket/',
                controller: 'BasketController'
            })
            .when('/Basket/Checkout',
            {
                templateUrl: 'Basket/Checkout',
                controller: 'CheckoutController'
            })
           .when('/Basket/CompletedOrder',
            {
                templateUrl: '/Basket/CompletedOrder',
                controller: 'CompletedOrderController'
            })
            .when('/Checkout/:url',
            {
                templateUrl: '/Basket/Index',
                controller: 'IndexCheckoutController'
            })
           
            .when('/Career', { templateUrl: '/Home/Career', controller: 'CareerController' })
            .otherwise({ templateUrl: '/Home/Main', controller: 'MainController' });
    }])
    .controller('RootController', ['$scope', '$route', '$routeParams', '$location', function ($scope,  $route, $routeParams, $location) {
        $scope.$on('$routeChangeSuccess', function (e, current, previous) {
            $scope.activeViewPath = $location.path();
        });

        $scope.Search = function (SearchString) {

            $location.url('/SearchByCategory/' + SearchString);
        };

        $scope.change = function (SearchString) {

            $location.url('/SearchByCategory/' + SearchString);
        };

        $scope.Checkout = function (url) {

            $location.url('/Checkout/' + url);
        };

    }]);
