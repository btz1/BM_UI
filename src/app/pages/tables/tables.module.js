/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tables', {
          url: '/tables/allProducts',
          templateUrl: 'app/pages/tables/smart/tables.html',
          controller: 'TablesPageCtrl',
          title: 'List Products',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        })/*.state('tables.customers', {
        url: '/allCustomers',
        templateUrl: 'app/pages/tables/smart/tables.html',
        title: 'List All Customers',
        sidebarMeta: {
            order: 100,
        },
        });*/
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
