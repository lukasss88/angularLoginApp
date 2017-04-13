(function ()
{
    'use strict';
    function LoginController()
    {
        var ctrl = this;

        ctrl.variable = "world!"
    }

    angular.module('app').controller('LoginController', LoginController);

})();
