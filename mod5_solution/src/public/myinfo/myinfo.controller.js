(function () {
  "use strict";
  angular.module('public')
  .controller("MyInfoController", MyInfoController);

  MyInfoController.$inject = ["UserService", "ApiPath"];
  function MyInfoController(UserService, ApiPath) {
    var myInfoCtrl = this;
    myInfoCtrl.userInfo = UserService.getUserInfo();
    myInfoCtrl.basePath = ApiPath;
    console.log("USer info: ",myInfoCtrl.userInfo);
  }
})();
