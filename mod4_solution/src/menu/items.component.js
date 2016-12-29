(function(){
  'use strict';
  //create component called 'items' that shows all of the menu items for a particular category.
  angular.module('data')
  .component('items',{
    templateUrl: 'src/menu/templates/item.template.html',
    bindings: {
      items: '<'
    },
    controller: ItemsComponent,
    controllerAs: 'item',
    bindToController: true
  });

  function ItemsComponent(){
    var item = this;
  }
})();
