/**
 * Created by pli9247 on 3/22/2016.
 */
/**Factory for the food Favourites **/
foodDataApp.factory("favouriteFactory", ['$localStorage', function ($localStorage) {
    var favouriteFactory = {};
    var favouriteFoodList = '';

    var initializeFavouriteFood = function () {

        return [
            {name: 'Apples, raw, with skin', ndbno: '09003'},
            {name: 'Apples, raw, granny smith, with skin', ndbno: '09502'},
            {name: 'Apples, canned, sweetened, sliced, drained, unheated', ndbno: '09007'},
            {name: 'Apples, raw, without skin, cooked, boiled', ndbno: '09005'},
            {name: 'Apples, dried, sulfured, stewed, without added sugar', ndbno: '09012'},
            {name: 'Apples, dried, sulfured, uncooked', ndbno: '09011'}
        ]
    };

    favouriteFactory.getFavouriteFoods = function () {
        if ($localStorage.favouriteFoodList == null) {
            $localStorage.favouriteFoodList = initializeFavouriteFood();
        }
        return $localStorage.favouriteFoodList;
    }

    favouriteFactory.addFavouriteFood = function (favouriteFoodObj) {
        favouriteFoodList = $localStorage.favouriteFoodList;
        var isExist = [];
        var favouriteFood = {
            name: favouriteFoodObj.name,
            ndbno: favouriteFoodObj.ndbno
        }
        isExist = favouriteFoodList.filter(function (food) {
            if (food.name == favouriteFood.name) {
                return true;
            }
            else {
                return false;
            }
        });
        if (isExist.length == 0) {
            favouriteFoodList.push(favouriteFood);
        }

        $localStorage.favouriteFoodList = favouriteFoodList;
    }

    /** Method to remove the favourite**/
    favouriteFactory.removeFavouriteFood = function (foodId) {
        var favouriteFoodList = $localStorage.favouriteFoodList;
        for (var i = 0; i < favouriteFoodList.length; i++) {
            if (foodId == favouriteFoodList[i].ndbno) {
                favouriteFoodList.splice(i, 1);
            }
        }
        $localStorage.favouriteFoodList = favouriteFoodList;
        return $localStorage.favouriteFoodList;
    }

    return favouriteFactory;

}]);