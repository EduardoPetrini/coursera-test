(function(){
  'use strict';
  angular.module('data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath){
    var svc = this;

    svc.getAllCategories = function(){
      var resp = $http({
        method: 'GET',
        url: ApiBasePath+'/categories.json'
      });

      return resp.then(function(response){
       //console.log("Request category response: "+response.data.length);
        return response.data;
      }, function(error){
       //console.log("Request caegory error: ", error);
      });
    }

    svc.getItemsForCategory = function(categoryShotName){
      var resp = $http({
        method: 'GET',
        url: ApiBasePath+'/menu_items.json?category='+categoryShotName
      });

      return resp.then(function(response){
       //console.log("Request item response: "+response.data.menu_items.length);
        return response.data;
      },function(error){
       //console.log("Request item error: ", error);
      });
    }

  }
})();
