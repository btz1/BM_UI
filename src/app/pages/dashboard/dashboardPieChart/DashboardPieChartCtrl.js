/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil,dashBoardService) {

    $scope.pieChartData={};

    function loadPieChartData() {
        dashBoardService.getStats().then(function (response) {
            $scope.pieChartData = response;
        });
    }

    loadPieChartData();

    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    console.log($scope.pieChartData);
    $scope.charts = [{
      color: pieColor,
      description: 'Sales',
      // stats: $scope.pieChartData.saleCount,
        stats: 10,
    }, {
      color: pieColor,
      description: 'Delivered',
      // stats: $scope.pieChartData.deliveredCount,
        stats: 6,
    }, {
      color: pieColor,
      description: 'Pending',
      stats: 3,
    }, {
      color: pieColor,
      description: 'Returned',
      stats: 1,
    }
    ];

   /* function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(100));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    $timeout(function () {
      loadPieCharts();
      updatePieCharts();
    }, 1000);*/
  }
})();