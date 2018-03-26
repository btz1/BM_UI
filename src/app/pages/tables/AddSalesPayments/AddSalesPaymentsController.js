/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.AddSalesPayments')
        .controller('AddSalesPaymentsController', AddSalesPaymentsController);

    /** @ngInject */
    function AddSalesPaymentsController ($scope,$http,apiUrl,salesDataService)
    {
        $scope.isCash = false;

        /*$scope.salesData = function () {
            var noPromise = salesDataService.loadSalesData();
            noPromise.then(function (response) {
                $scope.saleData = response

            });
        };
        $scope.salesData();*/

        $scope.addPaidAmountToSale = function () {

            if($scope.salesId !== "" && $scope.paidAmount !== "") {
                    // $scope.isCash = true;

                var data = {
                    "sale":{"salesId":$scope.salesId},
                    "amountPaid":$scope.paidAmount,
                    "cashPayment":$scope.isCash
                }

                $http({
                    url: apiUrl + "/addSalePayment",
                    method: "post",
                    params:{
                        salePaymentJSON:data
                    },
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(function (response) {
                    if (response.status === 200 || response.status === 202){
                        notificationService.showCustomNotification("success","Sales Amount Added Successfully.","Success");
                        $scope.salesId = "";
                        $scope.paidAmount = "";
                        $scope.isCash = false;
                    }else {
                        notificationService.showCustomNotification("error","Error in Adding Sales Amount.","Error");

                    }

                })
            }else {
                notificationService.showCustomNotification("warning","Plz Fill All Fields.","Warning");
            }
        }


    }


})();
