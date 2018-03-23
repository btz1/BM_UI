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

        return {
            loadSalesData: loadSalesData
        };
    };

    var module = angular.module("BlurAdmin.pages");
    module.factory("salesDataService", salesDataService);
}());
