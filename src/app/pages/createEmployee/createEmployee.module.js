/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.createEmployee', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
                'createEmployee', {
                    url: '/createEmployee',
                    templateUrl : 'app/pages/form/layouts/widgets/createEmployee.html',
                    title: 'Create Employee',
                    controller:'createEmployeeController',
                    sidebarMeta: {
                        icon: 'ion-gear-a',
                        order: 200
                    }
                });
    }

})();
