/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ListEmployee', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
                'ListEmployee', {
                    url: '/ListEmployee',
                    templateUrl : 'app/pages/tables/Employee/ListEmployee.html',
                    title: 'List Employee',
                    controller:'ListEmployeeController',
                    sidebarMeta: {
                        icon: 'ion-gear-a',
                        order: 200
                    },
                });
    }

})();
