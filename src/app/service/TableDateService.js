(function() {
    var tableDataService = function($http) {

        var getProductTableData = function() {
            return $http({
                url: "http://localhost:8080/getAllProducts",
                method: "GET"
            }).then(function(response) {
                return response.data
            });
        };
        return {
            getProductTableData: getProductTableData
        };
    };

    var module = angular.module("BlurAdmin.pages.tables");
    module.factory("tableDataService", tableDataService);
}());
