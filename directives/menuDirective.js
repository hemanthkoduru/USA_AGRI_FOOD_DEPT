/**
 * Created by pli9247 on 3/23/2016.
 */
/**Directive for the Menu **/
foodDataApp.directive('mainMenu',function(){
    return{
        restrict:'E',
        templateUrl:'templates/menuTemplate.html',
        controller:'menuCtrl'
    }

})
