(function() {
    var productDataService = function($http) {

        var getAllProducts = function() {
            return $http({
                url: "http://localhost:8080/getAllProducts",
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
