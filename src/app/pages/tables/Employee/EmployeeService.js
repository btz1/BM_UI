(function() {
    var EmployeeDataService = function($http,apiUrl) {

        var loadEmployees = function() {
            return $http({
                url: apiUrl+"getAllEmployee",
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function(response) {
                return response.data
            });
        };

        return {
            loadEmployees: loadEmployees
        };
    };

    var module = angular.module("BlurAdmin.pages");
    module.factory("EmployeeDataService", EmployeeDataService);
}());
