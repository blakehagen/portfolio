angular.module('portfolio', ['ui.router', 'ngSanitize']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './features/home/homeTmpl.html',
            controller: 'homeCtrl as home'
        })

    $urlRouterProvider
        .otherwise('/');




});