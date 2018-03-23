/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.AttendanceReport', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
                'AttendanceReport', {
                    url: '/AttendanceReport',
                    templateUrl : '/app/pages/tables/AttendanceReport/AttendenceReport.html',
                    title: 'Attendance List',
                    controller:'AttendanceReportController',
                    sidebarMeta: {
                        icon: 'ion-grid',
                        order: 200
                    },
                });
    }

})();
