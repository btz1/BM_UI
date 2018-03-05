/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.SalesList')
        .controller('SalesListController', SalesListController);

    /** @ngInject */
    function SalesListController ($scope,$http,apiUrl)
    {

        $scope.loadSalesData = function () {



            $http({
                url: apiUrl + "getAllSales",
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (response) {
                $scope.SalesData = response.data;

            })
        }


    }


})();
