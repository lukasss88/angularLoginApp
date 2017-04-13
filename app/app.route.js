(function ()
{
    'use strict';

    function config($routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'modules/login/login.tpl.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl',
            css: '/modules/login/login.style.css'
        });
        $routeProvider.when('/registration', {
            templateUrl: 'modules/registration/registration.tpl.html',
            controller: 'RegisterController',
            controllerAs: 'registerCtrl',
            css: '/modules/registration/registration.style.css'
        }).otherwise({redirectTo: '/'});
    }

    angular.module('app').config(config);

})();
