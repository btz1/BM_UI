/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ListEmployee')
        .controller('ListEmployeeController', ListEmployeeController);

    /** @ngInject */
    function ListEmployeeController ($scope,$http,apiUrl,EmployeeDataService)
    {

        $scope.loadEmployees = function () {

            var promise = EmployeeDataService.loadEmployees();
            promise.then(function (response) {
                $scope.employeeData =response;
            });

        };
        $scope.loadEmployees();



    }


})();
