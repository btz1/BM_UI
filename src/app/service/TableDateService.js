(function() {
    var tableDataService = function($http,apiUrl) {

        var getProductTableData = function() {
            return $http({
                url: apiUrl+"getAllProducts",
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
