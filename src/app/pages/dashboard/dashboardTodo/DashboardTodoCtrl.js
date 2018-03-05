/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardTodoCtrl', DashboardTodoCtrl);

  /** @ngInject */
  function DashboardTodoCtrl($scope, baConfig,$http, dashBoardService) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }

   /* $scope.todoList = [
      { text: 'Check me out' },
      { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
      { text: 'Ex has semper alterum, expetenda dignissim' },
      { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
      { text: 'Simul erroribus ad usu' },
      { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
      { text: 'Get in touch with akveo team' },
      { text: 'Write email to business cat' },
      { text: 'Have fun with blur admin' },
      { text: 'What do you think?' }
    ];*/


    $scope.newTodoText = '';

    $scope.addToDoItem = function (event, clickPlus, apiUrl) {
      if (clickPlus || event.which === 13) {

          $http({
              url: apiUrl + "saveTodoMessage",
              method: "post",
              params:{
                  message:$scope.newTodoText
              },
              headers: {
                  "content-type": "application/json"
              }
          }).then(function(response){
                  $scope.todoList = response.data;
              });

        $scope.todoList.unshift({
          text: $scope.newTodoText,
          color: getRandomColor(),
        });
        $scope.newTodoText = '';
      }
    };

      $scope.loadList = function () {

          var todoListPromise = dashBoardService.getToDoList();

          todoListPromise.then(function (response) {
              $scope.todoList = response;
              $scope.todoList.forEach(function(item) {
                  item.color = getRandomColor();
              });
          });

              /*$scope.todoList.unshift({
                text: $scope.newTodoText,
                color: getRandomColor(),
              });
              $scope.newTodoText = '';*/
      };
      $scope.loadList();
  }
})();