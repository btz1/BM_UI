/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.AddSalesPayments', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
                'AddSalesPayments', {
                    url: '/AddSalesPayments',
                    templateUrl : 'app/pages/tables/AddSalesPayments/AddSalesPayments.html',
                    title: 'Add Sales Payments',
                    controller:'AddSalesPaymentsController',
                    sidebarMeta: {
                        icon: 'ion-grid',
                        order: 200
                    },
                });
    }

})();
