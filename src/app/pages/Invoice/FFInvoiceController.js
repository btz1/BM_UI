/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.FFInvoice')
        .controller('FFInvoiceController', FFInvoiceController);

    /** @ngInject */
    function FFInvoiceController ($scope,$http)
    {

        $scope.invoice = {
            items: [{
                name: 'item',
                description: 'item description',
                qty: 5,
                price: 5.5
            },{
                name: 'item',
                description: 'item description',
                qty: 5,
                price: 7.5
            }]
        };
        $scope.add = function(){
            $scope.invoice.items.push({
                name: '',
                description: '',
                qty: 1,
                price: 0
            });
        },
            $scope.remove = function(index){
                $scope.invoice.items.splice(index, 1);
            },
            $scope.total = function(){
                var total = 0;
                angular.forEach($scope.invoice.items, function(item){
                    total += item.qty * item.price;
                })
                return total;
            }


        $scope.customer ="";
        $scope.product="";
        $scope.unitPrice="";
        $scope.quantity ="";
        $scope.itemTotal="";

        $scope.loadCustomers=function() {
                $http({
                    url: "http://localhost:8080/getAllCustomers",
                    method: "get",
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(function (response) {
                    $scope.customer = response.data


                })

        };

    }


})();
