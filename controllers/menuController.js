/**
 * Created by pli9247 on 3/23/2016.
 */
/** Controller for the Menu in the Page **/
foodDataApp.controller('menuCtrl',function($rootScope,$scope,$location,$timeout, constantFactory){


  /** Method to redirect to the favourites view page **/
    $scope.viewFavourites = function($event){

        $timeout(function(){
            $location.path(constantFactory.VIEW_FAVOURITE_PAGE);
        },100);

    }

    /** Method to redirect to the favourites edit page **/
    $scope.editFavourites = function($event){

        $timeout(function(){
            $location.path(constantFactory.EDIT_FAVOURITE_PAGE);
        },100);

    }

});