/**
 * Created by pli9247 on 3/23/2016.
 */

/** Controller for the view favourite foods Page **/
foodDataApp.controller('viewFavouriteCtrl', function($scope, $location, $localStorage, favouriteFactory, serviceFactory, constantFactory)
{
    $scope.favouriteFoods = favouriteFactory.getFavouriteFoods();

    /** Method to display to the basic food details page **/
    $scope.openBasicDetails = function(ndbno)
    {
        if(ndbno !=null)
        {
            var serviceURL='reports/?ndbno='+ndbno+'&type=b&format=json&api_key='+constantFactory.APIKEY;

            $scope.getBasicFoodDetailsSuccessHandler = function(response)
            {
                $localStorage.foodBasicDetails = response.data.report.food;
                $location.path(constantFactory.FOOD_BASIC_DETAILS_PAGE);
            }
            $scope.getBasicFoodDetailsErrorHandler = function(response)
            {
                alert(constantFactory.ERROR_MESSAGE);
                $location.path(constantFactory.VIEW_FAVOURITE_PAGE);
            }

            serviceFactory.serviceCall(serviceURL,$scope.getBasicFoodDetailsSuccessHandler,$scope.getBasicFoodDetailsErrorHandler);

        }
    };

});

/** Controller for the edit favourite foods Page **/
foodDataApp.controller('removeFavouriteFoodCtrl', function($scope, $location, $localStorage, favouriteFactory, serviceFactory, constantFactory)
{
    $scope.favouriteFoods = favouriteFactory.getFavouriteFoods();

    /** Method to remove the food from favourites **/
    $scope.removeFavourite = function(ndbno)
    {
        $scope.favouriteFoods = favouriteFactory.removeFavouriteFood(ndbno);
    }

    /** Method to display to the basic food details page **/
    $scope.openBasicDetails = function(ndbno)
    {
        if(ndbno !=null)
        {
            var serviceURL='reports/?ndbno='+ndbno+'&type=b&format=json&api_key='+constantFactory.APIKEY;

            $scope.getBasicFoodDetailsSuccessHandler = function(response)
            {
                $localStorage.foodBasicDetails = response.data.report.food;
                $location.path(constantFactory.FOOD_BASIC_DETAILS_PAGE);
            }
            $scope.getBasicFoodDetailsErrorHandler = function(response)
            {
                alert(constantFactory.ERROR_MESSAGE);
                $location.path(constantFactory.EDIT_FAVOURITE_PAGE);
            }

            serviceFactory.serviceCall(serviceURL,$scope.getBasicFoodDetailsSuccessHandler,$scope.getBasicFoodDetailsErrorHandler);
        }
    };


});
