(function() {
    var DatePickerSharingService = function($http,apiUrl) {

        var selectedDate = "";

        var convertTimeStampToDate = function (timestamp) {
            var a = new Date(timestamp);
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            // var hour = a.getHours();
            // var min = a.getMinutes();
            // var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year;
            return time;
        };

        return {
            convertTimeStampToDate:convertTimeStampToDate,
            selectedDate: selectedDate
        };
    };

    var module = angular.module("BlurAdmin.pages");
    module.factory("datePickerSharingService", DatePickerSharingService);
}());
