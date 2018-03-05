/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ListCustomer')
        .controller('ListCustomerController', ListCustomerController);

    /** @ngInject */
    function ListCustomerController ($scope,$http,apiUrl)
    {

        $scope.loadCustomers = function () {

            $http({
                url: apiUrl+ "getAllCustomers",
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (response) {
                $scope.customersData = response.data;

            })
        }


    }


})();
