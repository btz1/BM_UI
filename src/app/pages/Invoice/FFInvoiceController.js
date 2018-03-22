/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.FFInvoice')
        .controller('FFInvoiceController', FFInvoiceController);

    /** @ngInject */
    function FFInvoiceController ($scope,$http,productDataService,customerDataService,$q,apiUrl)
    {

        $scope.allProducts = [];
        $scope.allCustomers = [];
        $scope.customerfirstName = "";
        $scope.customerfirstName = "";
        $scope.customerEmail = "";
        $scope.customerAddress = "";
        $scope.customerCity = "";
        $scope.customerPhoneNumber ="";
        $scope.customerBalance = "";
        $scope.selectedCustomer;

        $scope.getAllProducts = function () {
            var promise1 = productDataService.getAllProducts();
            var promise2 = customerDataService.getAllCustomersSummary();

            $q.all([promise1, promise2]).then(function(response){
                $scope.allProducts = response[0];
                $scope.allCustomers = response[1];

                $scope.invoice = {
                    items: [{
                        productList: $scope.allProducts,
                        selectedProduct:"",
                        qty: 1,
                        price: ""
                    }]
                };
            });
        };
        $scope.getAllProducts();

        $scope.populateSelectedProduct = function (selected,item) {
            item.selectedProduct = selected.urduName;
            item.price = selected.price;
        };

        $scope.populateSelectedCustomer = function (selected,item) {
            item.selectedCustomer = selected.firstName;
            $scope.customerfirstName = selected.firstName + selected.lastName;
            $scope.customerEmail = selected.email;
            $scope.customerAddress = selected.address1 + selected.address2;
            $scope.customerCity = selected.city;
            $scope.customerPhoneNumber = selected.phoneNumber;
            $scope.customerBalance = selected.balance;
        };



        console.log($scope.invoice);
        $scope.add = function(){
            $scope.invoice.items.push({
                productList: $scope.allProducts,
                customerList:$scope.allCustomers,
                selectedProduct:"",
                selectedCustomer:"",
                qty: 1,
                price: ""
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


        $scope.printInvoice = function(printSectionId) {
            var innerContents = document.getElementById(printSectionId).innerHTML;
            var innerContents1 = document.getElementById("printSection2").innerHTML;
            var popupWinindow = window.open('', '_blank', 'width=4000,height=4000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWinindow.document.open();
            popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" />' +
                '</head><body onload="window.print()"> <section class="row" ng-show="false" > <div style="width: 100%;"> ' +
                '<img src="../../../assets/img/header.jpg" width="100%" height="250px" /><br/><br/><br/> ' +
                '<table class="table table-hover" style="border:1px solid black;width: 100%"> ' +
                '<thead> <tr> ' +
                '<th style="border:1px solid black;padding: 10px;">Customer</th> ' +
                '<th style="border:1px solid black;padding: 10px;">Product</th> ' +
                '<th style="border:1px solid black;padding: 10px;">Unit Price</th> ' +
                '<th style="border:1px solid black;padding: 10px;">Quantity</th> ' +
                '<th style="border:1px solid black;padding: 10px;">Item Total</th> ' +
                '</tr> </thead>' + innerContents + ' </table> ' +
                '<br/><br/> <img src="../../../assets/img/footer.jpg" width="100%" height="100px" /> </div> </section> </html>');
            popupWinindow.document.close();
        };

        $scope.saveSaleData = function () {

        };

        $scope.loadCustomers=function() {
                $http({
                    url: apiUrl + "getAllCustomers",
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
