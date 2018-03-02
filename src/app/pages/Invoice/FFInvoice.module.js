/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.FFInvoice', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state(
                'FFInvoice', {
                    url: '/FFInvoice',
                    templateUrl : 'app/pages/Invoice/FFInvoice.html',
                    title: 'Generate Invoice',
                    controller:'FFInvoiceController',
                    sidebarMeta: {
                        icon: 'ion-gear-a',
                        order: 200
                    },
                });
    }

})();
