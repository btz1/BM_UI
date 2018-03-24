/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.AttendanceReport')
        .controller('AttendanceReportController', AttendanceReportController);

    /** @ngInject */
    function AttendanceReportController ($scope,$http,apiUrl)
    {

        $scope.loadEmployeeAttendance = function () {

            $http({
                url: apiUrl + "getALlEmployeeAttendance",
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (result) {
                $scope.employeesAttendance = result.data;
                if ($scope.employeesAttendance.present){

                }
            });


        }

    }


})();
