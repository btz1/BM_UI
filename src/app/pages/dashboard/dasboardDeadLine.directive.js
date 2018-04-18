/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .directive('dashboardDeadLine', dashboardDeadLine);

    /** @ngInject */
    function dashboardDeadLine() {
        return {
            restrict: 'EA',
            controller: 'DashboardTodoCtrl',
            templateUrl: 'app/pages/dashboard/SalesDeadLine.html'
        };
    }
})();