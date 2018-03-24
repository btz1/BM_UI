(function() {
    var DatePickerSharingService = function($http,apiUrl) {

        var selectedDate = "";

        return {
            selectedDate: selectedDate
        };
    };

    var module = angular.module("BlurAdmin.pages");
    module.factory("datePickerSharingService", DatePickerSharingService);
}());
