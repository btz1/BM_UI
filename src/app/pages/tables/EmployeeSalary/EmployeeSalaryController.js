/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.EmployeeSalary')
        .controller('EmployeeSalaryController', EmployeeSalaryController);

    /** @ngInject */
    function EmployeeSalaryController ($scope,$http,apiUrl)
    {
        $scope.paySalaryList = [];
        $scope.salaryAmount = "";
        $scope.fullSalary = false;

        $scope.paySalary = function (employee,amount) {
            if(amount !== ""){
                var obj = {empId:employee.employeeId,
                amount:amount};
                $scope.paySalaryList.push(obj);
            }

        }
        $scope.fullSalaryPay = function (employee,fullSalary) {
            if (fullSalary){
                $scope.salaryAmount = employee.currentPayable;
                var obj ={empId:employee.employeeId,
                    amount:$scope.salaryAmount,date: new Date()};
                $scope.paySalaryList.push(obj)
            }else {
                $scope.paySalaryList = $scope.paySalaryList.filter(function (element) {
                return element.empId !== employee.employeeId;
            });
                $scope.salaryAmount = "";
            }
        };
        $scope.addAllSalaries =function () {

            $http({
                url: apiUrl + "paySalary",
                method: "get",
                params:{
                    paySalaryList:$scope.paySalaryList
                },
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (result) {
                if (result.status === 200 || result.status === 202){
                    notificationService.showCustomNotification("success","Salaries Paid Successfully.","Success");
                }else {
                    notificationService.showCustomNotification("error","Error in Paying Salary Process.","Error");
                }
                });
        };

        $scope.loadEmployeeSalaries = function () {

            $http({
                url: apiUrl + "getEmployeePayableSalaryList",
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (result) {
                $scope.employeesSalaraies = result.data;
            });


        }

    }


})();
