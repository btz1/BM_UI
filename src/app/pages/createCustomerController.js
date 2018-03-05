/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin')
        .controller('createCustomerController', createCustomerInitiated);

    /** @ngInject */
    function createCustomerInitiated($scope,$http,apiUrl)
    {
        $scope.firstName = "";
        $scope.lastName ="";
        $scope.email = "";
        $scope.address ="";
        $scope.city = "";
        $scope.phone ="";

        $scope.createCustomerAction=function(){
            if ($scope.firstName != "" && $scope.phone!="")
            {
                var formData = {
                    "firstName":$scope.firstName,
                    "lastName":$scope.lastName,
                    "email":$scope.email,
                    "address1":$scope.address,
                    "city":$scope.city,
                    "phoneNumber":$scope.phone
                };
                $http({
                    url: apiUrl + "createCustomer",
                    method: "post",
                    params:{
                        customerJson:formData
                    },
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(function (result) {
                    if (result.status === 202) {
                        console.log("Customer    created");
                        $scope.resetForm();
                    }
                    else {
                        console.log("Duplicate Entry");
                    }
                });
            }
            else
            { console.log("Plz fill all fields");
            }
        }

    }


})();