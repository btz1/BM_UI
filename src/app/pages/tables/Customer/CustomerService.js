(function() {
    var customerDataService = function($http,apiUrl) {

        var getAllCustomers = function() {
            return $http({
                url: apiUrl+"getAllCustomers",
                method: "GET"
            }).then(function(response) {
                return response.data
            });
        };

        var getAllCustomersSummary = function() {
            return $http({
                url: apiUrl+ "getAllCustomersSummary",
                method: "GET"
            }).then(function(response) {
                return response.data
            });
        };

        return {
            getAllCustomers: getAllCustomers,
            getAllCustomersSummary: getAllCustomersSummary
        };
    };

    var module = angular.module("BlurAdmin.pages");
    module.factory("customerDataService", customerDataService);
}());
