(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController',CategoriesController);

  CategoriesController.$inject = ['categoryList'];
  function CategoriesController(categoryList) {
   //console.log("Hello Category! ",categoryList);
    var category = this;
    category.categoryList = categoryList;
  }
})();
