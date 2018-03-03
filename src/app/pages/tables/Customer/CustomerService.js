(function() {
    var customerDataService = function($http) {

        var getAllCustomers = function() {
            return $http({
                url: "http://localhost:8080/getAllCustomers",
                method: "GET"
            }).then(function(response) {
                return response.data
            });
        };

        var getAllCustomersSummary = function() {
            return $http({
                url: "http://localhost:8080/getAllCustomersSummary",
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
