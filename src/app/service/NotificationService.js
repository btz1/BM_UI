(function() {
    var notificationService = function(toastr,toastrConfig) {

        var openedToasts = [];
        var options = {
            autoDismiss: false,
            positionClass: 'toast-top-right',
            type: 'info',
            timeOut: '1000',
            extendedTimeOut: '1000',
            allowHtml: false,
            closeButton: true,
            tapToDismiss: true,
            progressBar: true,
            newestOnTop: true,
            maxOpened: 0,
            preventDuplicates: false,
            preventOpenDuplicates: false,
            title: "Some title here",
            msg: "Type your message here"
        };

        var showCustomNotification = function (type,message,title) {
            options.type = type;
            options.title = title;
            options.msg = message;
            angular.extend(toastrConfig, options);
            openedToasts.push(toastr[options.type](options.msg, options.title));
        };

        return {
            showCustomNotification: showCustomNotification
        };
    };

    var module = angular.module("BlurAdmin.pages");
    module.factory("notificationService", notificationService);
}());
