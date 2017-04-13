describe('LoginController', function ()
{
    'use strict';

    var loginCtrl;

    beforeEach(module('app'));
    beforeEach(inject(function($controller){
        loginCtrl = $controller('LoginController');
    }));

    describe('initialization', function ()
    {
        it('should set variable', function ()
        {
            expect(loginCtrl.variable).toEqual('world!');
        });
    });
});
