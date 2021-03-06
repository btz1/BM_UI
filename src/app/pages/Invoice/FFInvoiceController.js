/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.FFInvoice')
        .controller('FFInvoiceController', FFInvoiceController);

    /** @ngInject */
    function FFInvoiceController ($scope,$http,productDataService,customerDataService,$q,apiUrl,datePickerSharingService,salesDataService,notificationService)
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
        $scope.saleDataJSON={};
        $scope.saleProducts=[];
        $scope.clearDate = false;
        $scope.cashAmount= false;
        $scope.useExistingCustomer=true;

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
            item.selectedProduct = selected.name;
            item.price = selected.price;
            var productDetail = {
                quantity: item.qty,
                salePrice: selected.price,
                productModel: selected
            };
            $scope.saleProducts.push(productDetail);
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


        $scope.add = function(){
            $scope.invoice.items.push({
                productList: $scope.allProducts,
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

        $scope.saveSaleData = function (advancePayment,selectedCustomer) {
            var saleJSON = {
                totalAmount:$scope.total(),
                deliverDate:datePickerSharingService.selectedDate,
                advancePayment:advancePayment,
                saleProductList:$scope.saleProducts,
                customer:selectedCustomer
            };
            var promise = salesDataService.saveSaleData(saleJSON);
            promise.then(function (response) {
                if (response.status === 200 || response.status === 202){
                    notificationService.showCustomNotification("success","Sale Added Successfully.","Success");
                    $scope.advancePayment = undefined;
                    $scope.selectedDate = undefined;
                    $scope.clearDate = true;
                    $scope.getAllProducts();
                }else {
                    notificationService.showCustomNotification("error","Error in Adding Sale.","Error");
                }
            });
        };

        $scope.updateExistingCustomerFlag = function (updated) {
            $scope.useExistingCustomer = updated;
        };

        $scope.customer ="";
        $scope.product="";
        $scope.unitPrice="";
        $scope.quantity ="";
        $scope.itemTotal="";


        $scope.printInvoice = function(printSectionId,selectedCustomer,advancePayment) {
            var innerContents = document.getElementById(printSectionId).innerHTML;
            var innerContents1 = document.getElementById("printSection2").innerHTML;
            var popupWinindow = window.open('', '_blank', 'width=4000,height=4000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWinindow.document.open();
            popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" />' +
                '</head><body onload="window.print()"> <section class="row" ng-show="false" > <div style="width: 100%;"> ' +
                '<img src="../../../assets/img/header.jpg" width="100%" height="200px" /><br/><br/><br/> ' +
                '<table>' +
                '<tr><th style="width:14em;text-align: left"><h4>Customer Information:</h4></th>' +
                '</table>'+
                '<table>' +
                '<tr><th style="width:25em;text-align: left">Name:</th>' +
                '<td style="width:25em;text-align: left">'+selectedCustomer.firstName +' ' + selectedCustomer.lastName+'</td>' +
                '<th style="width:25em;text-align: left">Email:</th>' +
                '<td style="width:25em;text-align: left">'+selectedCustomer.email+'</td></tr>' +
                '<tr><th style="width:25em;text-align: left">Address:</th>' +
                '<td style="width:25em;text-align: left">'+selectedCustomer.address1+'</td>' +
                '<th style="width:25em;text-align: left">City:</th>' +
                '<td style="width:25em;text-align: left">'+selectedCustomer.city+'</td></tr>' +
                '<tr><th style="width:25em;text-align: left">Phone Number:</th>' +
                '<td style="width:25em;text-align: left">'+selectedCustomer.phoneNumber+'</td>' +
                '<th style="width:25em;text-align: left">Balance:</th>' +
                '<td style="width:25em;text-align: left">'+selectedCustomer.balance+'</td></tr>' +
                '</table>'+

                '<br/>'+

                '<table style="width: 100%;border-collapse: collapse"> ' +
                ' <tr> ' +
                '<th style="border:0.1px solid black;padding: 5px;">Product</th> ' +
                '<th style="border:0.1px solid black;padding: 5px;">Unit Price</th> ' +
                '<th style="border:0.1px solid black;padding: 5px;">Quantity</th> ' +
                '<th style="border:0.1px solid black;padding: 5px;">Item Total</th> ' +
                '</tr>' + innerContents + ' </table> ' +

                '<br/>'+

                '<table>' +
                '<tr><th style="width:14em;text-align: left">Advance Payment:</th>' +
                '<td style="width:13em;text-align: left">'+advancePayment+'</td></tr>' +
                '<tr><th style="width:14em;text-align: left">Deliver Date:</th>' +
                '<td style="width:13em;text-align: left">'+datePickerSharingService.selectedDate.toDateString()+'</td></tr>' +
                '</table>'+
                '<br/><br/> <img src="../../../assets/img/footer.jpg" width="100%" height="100px" /> </div> </section> </html>');
            popupWinindow.document.close();
        };

    }


})();
