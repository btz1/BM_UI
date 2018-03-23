/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.Attendance')
        .controller('attendenceController', attendenceController);

    /** @ngInject */
    function attendenceController ($scope,$http,apiUrl,EmployeeDataService)
    {
        $scope.switcherValue = true;
        $scope.attendanceObject = {};


        var vm = this;
        vm.switches = {
            s1: true,
            s2: false,
            s3: true,
            s4: true,
            s5: false
        };

        $scope.loadEmployees = function () {

            var promise = EmployeeDataService.loadEmployees();
            promise.then(function (response) {
                $scope.employeeData =response;
            });

        };
        $scope.loadEmployees();

        $scope.employeeAttendance = function () {

            $http({
                url: apiUrl + "recordAttendance",
                method: "POST",
                params:{
                    attendanceJSON:$scope.attendanceObject
                },
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (result) {
                if (result.status === 202) {
                    console.log("Attendance Marked");
                }
                else {
                    console.log("Error in Attendance Marked");
                }
            });


        }
        $scope.populateAttendanceData = function (employeeId, status) {
            $scope.attendanceObject[employeeId] = status;

        }


    }


})();
