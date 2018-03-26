/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin')
        .controller('createProductController', createProductInitiated);

    /** @ngInject */
    function createProductInitiated ($scope,$http,apiUrl)
    {
        $scope.productCode ="";
        $scope.productName="";
        $scope.productPrice="";
        $scope.specialPrice ="";
        $scope.unit="";
        $scope.createProductAction=function(){
            if ($scope.productCode !==""&& $scope.productName!=="" && $scope.productPrice!=="")
            {
                var formData = {
                    "productCode":$scope.productCode,
                    "name":$scope.productName,
                    "price":$scope.productPrice,
                    "specialPrice":$scope.specialPrice,
                    "unit":$scope.unit
                };
                $http({
                    url: apiUrl + "createProduct",
                    method: "post",
                    params:{
                        productJSON:formData
                    },
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(function (result) {
                    if (result.status === 202 || result.status=== 200) {
                        notificationService.showCustomNotification("success","Product is created.","Success");
                        $scope.productCode ="";
                        $scope.productName="";
                        $scope.productPrice="";
                        $scope.specialPrice ="";
                        $scope.unit="";
                    }
                    else {
                        notificationService.showCustomNotification("error","Error in creating Product.","Error");
                    }
                });
            }
            else
            {
                notificationService.showCustomNotification("warning","Plz fill all fields.","Warning");

            }
        }

    }


})();