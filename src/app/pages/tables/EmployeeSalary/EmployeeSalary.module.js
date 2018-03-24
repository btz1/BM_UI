/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.EmployeeSalary', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
                'EmployeeSalary', {
                    url: '/EmployeeSalary',
                    templateUrl : '/app/pages/tables/EmployeeSalary/EmployeeSalary.html',
                    title: 'Employee Salary',
                    controller:'EmployeeSalaryController',
                    sidebarMeta: {
                        icon: 'ion-grid',
                        order: 200
                    },
                });
    }

})();
