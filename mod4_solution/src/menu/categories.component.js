(function(){
  'use strict';
  //create component called 'categories' that shows all available categories in the menu to the user.
  angular.module('MenuApp')
  .component('categories',{
    templateUrl: 'src/menu/templates/category.template.html',
    bindings: {
      cats: '<'
    },
    controller: CategoriesComponent,
    controllerAs: 'cat',
    bindToController: true
  })

  function CategoriesComponent(){
    var cat = this;
   //console.log("Hello category comp! ",cat.cats.length);
  }


})();
