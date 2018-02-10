/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.createProduct', [
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('createProduct', {
                url: '/createProduct.html',
                template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'Create Product',
                sidebarMeta: {
                    icon: 'ion-gear-a',
                    order: 100
                },
            });
    }

})();
