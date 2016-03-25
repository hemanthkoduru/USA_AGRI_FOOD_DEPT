'use strict';

angular
    .module('foodApp.routes', ['ngRoute', 'foodAppControllers'])
	.config(config);

function config ($routeProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'templates/homePage.html',
            controller: 'searchFood'
        })
        . when('/basicDetails', {
            templateUrl: './templates/basicFoodDetails.html',
            controller: 'displayFoodDetails'
        })
        . when('/viewFavourite', {
            templateUrl: './templates/viewFavouriteFoods.html',
            controller: 'viewFavouriteCtrl'
        })
        . when('/editFavourite', {
            templateUrl: './templates/editFavouriteFoods.html',
            controller: 'removeFavouriteFoodCtrl'
        })
        .otherwise({
        	 redirectTo: '/'
        });
}