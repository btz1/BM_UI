/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin')
        .controller('TablesPageCtrl', TablesPageCtrl);

    /** @ngInject */
    function TablesPageCtrl($scope, $filter, editableOptions, editableThemes,$http,tableDataService,$state,$interval) {

        $scope.pageName = $state.current.name;
        $scope.smartTableData = 0;
        $scope.testData = [];
        $scope.test = 0;
        $scope.tableDataResponseHolder = {};

        $scope.loadData = function () {
            var responsePromise = tableDataService.getProductTableData();

            responsePromise.then(function (response) {
                $scope.testData = response;
                $scope.smartTablePageSize = response.length;
            });
        };
        $scope.loadData();

        $interval(function() {
            $scope.smartTableData++;
        }, 500);

        $scope.reloadScope =function () {
            $scope.smartTableData = "kfjgfsdjhgj";
            console.log("reloaded");
        };

/*
        $scope.$watch('tableDataResponseHolder', function() {
                //any code in here will automatically have an apply run afterwards
                $scope.smartTableData = $scope.tableDataResponseHolder;
                $scope.smartTablePageSize = $scope.tableDataResponseHolder.length;
        });
*/

        $scope.statuses = [
            {value: 1, text: 'Good'},
            {value: 2, text: 'Awesome'},
            {value: 3, text: 'Excellent'},
        ];

        $scope.groups = [
            {id: 1, text: 'user'},
            {id: 2, text: 'customer'},
            {id: 3, text: 'vip'},
            {id: 4, text: 'admin'}
        ];

        $scope.showGroup = function(user) {
            if(user.group && $scope.groups.length) {
                var selected = $filter('filter')($scope.groups, {id: user.group});
                return selected.length ? selected[0].text : 'Not set';
            } else return 'Not set'
        };

        $scope.showStatus = function(user) {
            var selected = [];
            if(user.status) {
                selected = $filter('filter')($scope.statuses, {value: user.status});
            }
            return selected.length ? selected[0].text : 'Not set';
        };


        $scope.removeUser = function(index) {
            $scope.users.splice(index, 1);
        };

        $scope.addUser = function() {
            $scope.inserted = {
                id: $scope.users.length+1,
                name: '',
                status: null,
                group: null
            };
            $scope.users.push($scope.inserted);
        };

        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


    }

})();
