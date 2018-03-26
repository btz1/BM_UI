(function() {
    var salesDataService = function($http,apiUrl) {

        var loadSalesData = function() {
            return $http({
                url: apiUrl+"getAllSales",
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function(response) {
                return response.data
            });
        };

        var saveSaleData = function (data) {
            return $http({
                url: apiUrl+"saveSalesData",
                method: "POST",
                params: {
                    jsonObject:data
                },
                headers: {
                    "content-type": "application/json"
                }
            }).then(function(response) {
                return response
            });
        };

        return {
            saveSaleData: saveSaleData,
            loadSalesData: loadSalesData
        };
    };

    var module = angular.module("BlurAdmin.pages");
    module.factory("salesDataService", salesDataService);
}());
