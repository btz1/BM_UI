/**
 * Created by n.poltoratsky
 * on 23.06.2016.
 */
(function(){
    'use strict';

    angular.module('BlurAdmin.pages')
        .controller('datepickerpopupCtrl', datepickerpopupCtrl);

    /** @ngInject */
    function datepickerpopupCtrl($scope,datePickerSharingService) {

        $scope.open = open;
        $scope.opened = false;
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.options = {
            showWeeks: false
        };
        function open() {
            $scope.opened = true;
        }
        $scope.setSelectedDate = function () {
            datePickerSharingService.selectedDate = $scope.selectedDate;
        };

        $scope.clearDateField = function () {
            $scope.selectedDate = undefined;
        };
    }
})();