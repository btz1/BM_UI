/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ListCustomer', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
                'ListCustomer', {
                    url: '/ListCustomer',
                    templateUrl : 'app/pages/tables/Customer/ListCustomer.html',
                    title: 'List Customer',
                    controller:'ListCustomerController',
                    sidebarMeta: {
                        icon: 'ion-gear-a',
                        order: 200
                    },
                });
    }

})();
