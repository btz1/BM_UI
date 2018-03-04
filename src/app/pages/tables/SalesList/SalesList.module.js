/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.SalesList', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
                'SalesList', {
                    url: '/SalesList',
                    templateUrl : 'app/pages/tables/SalesList/SalesList.html',
                    title: 'Sales List',
                    controller:'SalesListController',
                    sidebarMeta: {
                        icon: 'ion-grid',
                        order: 200
                    },
                });
    }

})();
