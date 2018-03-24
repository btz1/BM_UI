/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.SalesList')
        .controller('SalesListController', SalesListController);

    /** @ngInject */
    function SalesListController ($scope,$http,apiUrl,salesDataService)
    {

        $scope.loadSales = function () {

            var promise = salesDataService.loadSalesData();
            promise.then(function (response) {
                $scope.SalesData =response;
            });

        };
        $scope.loadSales();


    }


})();
