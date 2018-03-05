(function() {
    var productDataService = function($http,apiUrl) {

        var getAllProducts = function() {
            return $http({
                url: apiUrl + "getAllProducts",
                method: "GET"
            }).then(function(response) {
                return response.data
            });
        };
        return {
            getAllProducts: getAllProducts
        };
    };

    var module = angular.module("BlurAdmin.pages.FFInvoice");
    module.factory("productDataService", productDataService);
}());
