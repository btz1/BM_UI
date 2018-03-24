/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.EmployeeSalary')
        .controller('EmployeeSalaryController', EmployeeSalaryController);

    /** @ngInject */
    function EmployeeSalaryController ($scope,$http,apiUrl)
    {

        $scope.loadEmployeeSalaries = function () {

            $http({
                url: apiUrl + "getEmployeePayableSalaryList",
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (result) {
                $scope.employeesSalaraies = result.data;
            });


        }

    }


})();
