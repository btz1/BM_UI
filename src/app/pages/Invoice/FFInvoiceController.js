/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.FFInvoice')
        .controller('FFInvoiceController', FFInvoiceController);

    /** @ngInject */
    function FFInvoiceController ($scope,$http,$timeout)
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
        };

        $scope.customer ="";
        $scope.product="";
        $scope.unitPrice="";
        $scope.quantity ="";
        $scope.itemTotal="";


        $scope.printToCart = function(printSectionId) {
            var innerContents = document.getElementById(printSectionId).innerHTML;
            var popupWinindow = window.open('', '_blank', 'width=4000,height=4000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWinindow.document.open();
            popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" />' +
                '</head><body onload="window.print()"> <section class="row" ng-show="false" > <div style="width: 100%;"> ' +
                '<img src="../../../assets/img/header.jpg" width="100%" height="250px" /><br/><br/><br/> ' +
                '<table class="table table-hover" style="border:1px solid black;width: 100%"> ' +
                '<thead> <tr> ' +
                '<th style="border:1px solid black;padding: 10px;">Name</th> ' +
                '<th style="border:1px solid black;padding: 10px;">Description</th> ' +
                '<th style="border:1px solid black;padding: 10px;">Qty</th> ' +
                '<th style="border:1px solid black;padding: 10px;">Price</th> ' +
                '<th style="border:1px solid black;padding: 10px;">Total</th> ' +
                '</tr> </thead>' + innerContents + ' </table> ' +
                '<br/><br/> <img src="../../../assets/img/footer.jpg" width="100%" height="100px" /> </div> </section> </html>');
            popupWinindow.document.close();
        };

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
