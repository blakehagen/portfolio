angular.module('portfolio', ['ui-router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './features/home/homeTmpl.html'
        })




});