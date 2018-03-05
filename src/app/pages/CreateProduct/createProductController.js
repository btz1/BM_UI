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
            if (true)
            {
                var formData = {
                    "productCode":$scope.productCode,
                    "name":$scope.productName,
                    "price":$scope.productPrice,
                    "spacialPrice":$scope.specialPrice,
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
                    if (result.status === 202) {
                        console.log("Product created");
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