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
          url: '/tables',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TablesPageCtrl',
          title: 'Tables',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('tables.basic', {
          url: '/basic',
          templateUrl: 'app/pages/tables/basic/tables.html',
          title: 'Basic Tables',
          sidebarMeta: {
            order: 0,
          },
        }).state('tables.products', {
          url: '/allProducts',
          templateUrl: 'app/pages/tables/smart/tables.html',
          title: 'List Products',
          sidebarMeta: {
            order: 100,
          },
        }).state('tables.customers', {
        url: '/allCustomers',
        templateUrl: 'app/pages/tables/smart/tables.html',
        title: 'List All Customers',
        sidebarMeta: {
            order: 100,
        },
        });
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
