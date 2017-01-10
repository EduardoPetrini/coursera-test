(function functionName() {
  "use strict";

  angular.module('common')
  .service('UserService',UserService);

  function UserService(){
    var service = this;
    var userInfo = null;

    service.saveUserInfo = function(name,lastname,email,phone,menuItem){
      userInfo = {
        'name': name,
        'lastname': lastname,
        'email': email,
        'phone': phone,
        'menuItem': menuItem
      };
      console.log("User saved: ",userInfo);
    }

    service.getUserInfo = function(){
      return userInfo;
    }
  }
})();
