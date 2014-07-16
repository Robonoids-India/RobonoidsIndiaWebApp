var RIWebApp = angular.module('RIWebApp', ['ngRoute', 'ngResource']);

// manage routing and controllers
RIWebApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    // set up routes
    $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: 'partials/homeview.html'
        })
        .when('/about', {
            controller: 'aboutCtrl',
            templateUrl: 'partials/aboutusview.html'
        })
        .when('/page3', {
            controller: 'aboutCtrl',
            templateUrl: 'partials/page3view.html'
        })
        .when('/contact', {
            controller: 'aboutCtrl',
            templateUrl: 'partials/contactusview.html'
        })
        .otherwise({ redirectTo: '/' });

    // send requests with appropriate CORS headers for the whole app
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

RIWebApp.controller('homeCtrl', ['$scope', '$window', function($scope, $window) {
	$scope.goToAbout = function () {
		$window.location = '#/about';
	};
}]);

RIWebApp.controller('menuCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
    	var path = $location.path(); 
        return viewLocation == path;
    };
}]);

RIWebApp.controller('aboutCtrl', ['$scope', function($scope) {
}]);