(function() {
    var dashBoardService = function($http) {

        var getStats = function() {
            return $http({
                url: "http://localhost:8080/getDashBoardStats",
                method: "GET"
            }).then(function(response) {
                return response.data
            });
        };
        return {
            getStats: getStats
        };
    };

    var module = angular.module("BlurAdmin.pages.dashboard");
    module.factory("dashBoardService", dashBoardService);
}());
