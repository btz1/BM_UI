/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages')
        .controller('createCustomerController', createCustomerInitiated);

    /** @ngInject */
    function createCustomerInitiated($scope,$http,apiUrl,notificationService)
    {
        $scope.firstName = "";
        $scope.lastName ="";
        $scope.email = "";
        $scope.address ="";
        $scope.city = "";
        $scope.phone ="";

        $scope.createCustomerAction=function(){
            if ($scope.firstName !== "" && $scope.phone!="")
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
                    if (result.status === 202 || result.status === 200) {
                        notificationService.showCustomNotification("success","Customer is created.","Success");
                        $scope.firstName = "";
                        $scope.lastName ="";
                        $scope.email = "";
                        $scope.address ="";
                        $scope.city = "";
                        $scope.phone ="";

                    }
                    else {
                        notificationService.showCustomNotification("error","Error in Creating Customer.","Error");
                    }
                });
            }
            else
            {
                notificationService.showCustomNotification("warning","Plz Fill All Fields.","Warning");

            }
        }

    }


})();