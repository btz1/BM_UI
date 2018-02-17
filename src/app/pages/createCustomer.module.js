/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.createCustomer', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
                'createCustomer', {
                    url: '/createCustomer',
                    templateUrl : 'app/pages/form/layouts/widgets/customer/createCustomer.html',
                    title: 'Create Customer',
                    controller:'createCustomerController',
                    sidebarMeta: {
                        icon: 'ion-gear-a',
                        order: 200
                    }
                });
    }

})();
