/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.createProduct', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
                'createProduct', {
                url: '/createProduct',
                templateUrl : 'app/pages/form/layouts/widgets/createProduct.html',
                title: 'Create Product',
                controller:'createProductController',
                sidebarMeta: {
                    icon: 'ion-gear-a',
                    order: 200
                },
            });
    }

})();
