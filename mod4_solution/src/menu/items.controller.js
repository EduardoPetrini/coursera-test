(function () {
  'use strict';

  angular.module("MenuApp")
  .controller("ItemsController",ItemsController);

  ItemsController.$inject = ['$stateParams','MenuDataService']
  function ItemsController($stateParams, MenuDataService){
    var item = this;
   //console.log("Hello item controller, "+$stateParams.shortName);
    item.shortName = $stateParams.shortName;

    if(item.shortName){
      var promise = MenuDataService.getItemsForCategory(item.shortName);
      promise.then(function(data){
        item.data = data;
       //console.log("Item data response: ",item.data);
      })

    }
  }
})();
