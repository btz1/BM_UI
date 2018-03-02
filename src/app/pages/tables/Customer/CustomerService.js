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
        return {
            getAllCustomers: getAllCustomers
        };
    };

    var module = angular.module("BlurAdmin.pages");
    module.factory("customerDataService", customerDataService);
}());
