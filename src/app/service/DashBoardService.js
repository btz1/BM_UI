(function() {
    var dashBoardService = function($http,apiUrl) {

        var getStats = function() {
            return $http({
                url: apiUrl+"getDashBoardStats",
                method: "GET"
            }).then(function(response) {
                return response.data;
            });
        };


        var getToDoList = function () {
            return $http({
                url: apiUrl+"getAllTodoMessage",
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function(response){
                return response.data;
            });
        };

        var getSalesDeadlinesData = function () {

            return $http({
                url: apiUrl+"getSalesDeadlines",
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function(response){
                return response.data;
            });

        };
        return {
            getStats: getStats,
            getToDoList:getToDoList,
            getSalesDeadlinesData:getSalesDeadlinesData
        };
    };

    var module = angular.module("BlurAdmin.pages.dashboard");
    module.factory("dashBoardService", dashBoardService);
}());
