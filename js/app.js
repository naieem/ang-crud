var app = angular.module('myApp', ['ngRoute', 'firebase','ng-bootstrap-datepicker']);

app.config(function($routeProvider) {
    var config = {
        apiKey: "AIzaSyDictE2wD4RIQtuaPURvO1gcvzQqLC-Sok",
        authDomain: "medical-login.firebaseapp.com",
        databaseURL: "https://medical-login.firebaseio.com",
        projectId: "medical-login",
        storageBucket: "medical-login.appspot.com",
        messagingSenderId: "854763670874"
    };
    firebase.initializeApp(config);

    $routeProvider.when('/list', {
        controller: 'ListController',
        templateUrl: 'views/list.html'
    }).when('/add', {
        controller: 'AddController',
        templateUrl: 'views/add.html'
    }).when('/edit/:id', {
        controller: 'EditController',
        templateUrl: 'views/edit.html'

    }).when('/login', {
        controller: 'LoginController',
        templateUrl: 'views/login.html'

    }).otherwise({redirectTo: '/list'});
});
