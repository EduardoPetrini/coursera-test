(function(){
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menu/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menu/templates/category.view.html',
      controller: 'CategoriesController as category',
      resolve: {
        categoryList: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
        }]
      }
    }).state('categories.items', {
      url: '/item/{shortName}',
      templateUrl: 'src/menu/templates/items.view.html',
      controller: 'ItemsController as item'
    });
  }

})();
