(function () {
  "use strict";
  angular.module('public')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject = ['MenuService','UserService'];
  function SignUpController(MenuService,UserService){
    var signUpCtrl = this;
    signUpCtrl.itemMsg = "";
    signUpCtrl.disable = true;

    signUpCtrl.submit = function () {
      UserService.saveUserInfo(signUpCtrl.name, signUpCtrl.lastname, signUpCtrl.email, signUpCtrl.phone, signUpCtrl.menuItem)
      signUpCtrl.successMsg = "Your information has been saved";
    };

    signUpCtrl.checkMenuItem = function(){
      if(signUpCtrl.item){
        var menuItemPromise = MenuService.getMenuItem(signUpCtrl.item.toUpperCase());
        menuItemPromise.then(function (data) {
            signUpCtrl.itemMsg = "";
            signUpCtrl.disable = true
            signUpCtrl.menuItem = data;
            console.log(signUpCtrl.menuItem);
            if(signUpCtrl.menuItem == null){
              signUpCtrl.itemMsg = "No such menu number exists";
            }else{
              signUpCtrl.disable = false;
            }
        });
      }
    }
  }
})();
