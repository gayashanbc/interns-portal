(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard.viewReview', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('viewReview', {
          url: '/viewReview',
          templateUrl: 'app/pages/review/viewReview.html',
          title: 'View Review',
          sidebarMeta: {
            order: 800,
          },
        });
  }

})();
