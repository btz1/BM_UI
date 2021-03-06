/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin')
        .controller('createEmployeeController', createEmployeeInitiated);

    /** @ngInject */
    function createEmployeeInitiated($scope,$http,apiUrl,notificationService)
    {
        $scope.employeeName = "";
        $scope.daySalary = "";
        $scope.address ="";
        $scope.joiningDate= "";
        $scope.overTimeRate = "";
        $scope.monthlySalary ="";
        $scope.phone="";
        $scope.active ="";


        $scope.createEmployeeAction=function(){
            if($scope.active)
                $scope.active = true;
            else $scope.active = false;
            if ($scope.employeeName != ""&&$scope.overTimeRate != ""&&$scope.monthlySalary !=""&&$scope.phone!="")
            {
                var formData = {
                    "name":$scope.employeeName ,
                    "perDaySalary":$scope.daySalary,
                    "address":$scope.address,
                    "joinDate":$scope.joiningDate,
                    "overTimeRate":$scope.overTimeRate,
                    "perMonthSalary":$scope.monthlySalary,
                    "phone":$scope.phone,
                    "active":$scope.active
                };
                $http({
                    url: apiUrl + "createEmployee",
                    method: "post",
                    params:{
                        employeeJSON:formData
                    },
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(function (result) {
                    if (result.status === 202 || result.status === 200) {
                        notificationService.showCustomNotification("success","Employee is created.","Success");
                        $scope.employeeName = "";
                        $scope.daySalary = "";
                        $scope.address ="";
                        $scope.joiningDate= "";
                        $scope.overTimeRate = "";
                        $scope.monthlySalary ="";
                        $scope.phone="";
                        $scope.active ="";
                    }
                    else {
                        notificationService.showCustomNotification("error","Error in creating Employee.","Error");
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