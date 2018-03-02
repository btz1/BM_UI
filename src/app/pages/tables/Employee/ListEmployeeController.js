/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ListEmployee')
        .controller('ListEmployeeController', ListEmployeeController);

    /** @ngInject */
    function ListEmployeeController ($scope,$http)
    {

        $scope.loadEmployees = function () {

            $http({
                url: "http://localhost:8080/getAllEmployee",
                method: "post",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (response) {
                $scope.employeeData = response.data;

            })
        }


    }


})();
