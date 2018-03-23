/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.Attendance', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
                'Attendance', {
                    url: '/Attendance',
                    templateUrl : '/app/pages/tables/Attendance/attendance.html',
                    title: 'Employee Attendance',
                    controller:'attendenceController',
                    sidebarMeta: {
                        icon: 'ion-grid',
                        order: 200
                    },
                });
    }

})();
