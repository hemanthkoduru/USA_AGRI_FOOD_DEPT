var appController = angular.module('foodAppControllers', []);

/** Controller for the Home Page **/
appController.controller('searchFood', function($scope, $location, $localStorage, favouriteFactory, serviceFactory, constantFactory)
{

	$scope.noResults=false;
	$scope.isResults=false;
	$scope.favouriteFoodList = $localStorage.favouriteFoodList;

	/**Method to set the favourite food flag in the food search item list **/
	var addFavouriteFlag = function(foodSearchItems) {
		return foodSearchItems.map(function(item){
			var favouriteFoodsList = $localStorage.favouriteFoodList;
			for(i in favouriteFoodsList) {
				if(item.ndbno === favouriteFoodsList[i].ndbno ){
					item.favourite = true;
					return item;
				}
			}
			return item;
		})
	};

	/**Method to get food item list **/
	var getFoodDetails = function(searchValue)
	{
		var serviceURL = 'search/?format=json&q='+searchValue+'&sort=n&max=25&offset=0&api_key='+constantFactory.APIKEY;
		$scope.getFoodSearchResultsSuccessHandler = function(response)
		{
			$scope.noResults=false;
			$scope.isResults=true;
			$scope.foodSearch = addFavouriteFlag(response.data.list.item);
			$localStorage.foodSearch = $scope.foodSearch;
		}
		$scope.getFoodSearchResultsErrorHandler = function(response)
		{
			$scope.noResults = true;
			$scope.isResults=false;
			$location.path('/');
		}

		serviceFactory.serviceCall(serviceURL,$scope.getFoodSearchResultsSuccessHandler,$scope.getFoodSearchResultsErrorHandler);

	}


	if($localStorage.foodSearch != null && $localStorage.foodSearch.length > 0)
	{
		$scope.foodSearch = addFavouriteFlag($localStorage.foodSearch);
		$scope.searchValue = $localStorage.searchValue;
		$scope.isResults=true;
	}
	else
	{
		getFoodDetails('apple');
	}

	/**Method to search the  food **/
	$scope.searchFood = function(keyEvent) {
		 
		 if($scope.searchValue.length>3)
	     	{
				$localStorage.searchValue = $scope.searchValue;
				getFoodDetails($scope.searchValue);

		}
		else if($scope.name && $scope.name.length == 0)
		{
			$scope.noResults=true;
			$scope.isResults=false;
		};
	};

	/**Method to display the  basic food details **/
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
				 $location.path('/');
			 }

			 serviceFactory.serviceCall(serviceURL,$scope.getBasicFoodDetailsSuccessHandler,$scope.getBasicFoodDetailsErrorHandler);

		 }
	 };

	/**Method to add the food to favourites **/
	$scope.addFoodFavourite  = function(foodObj,$index,$event)
	{
		$event.currentTarget.outerHTML = "<span class='glyphicon glyphicon-star'>Added</span>";
		favouriteFactory.addFavouriteFood(foodObj);
	}

});

/** Controller for displaying the basic food details **/
appController.controller('displayFoodDetails', function($scope, $localStorage)
{
	$scope.foodDetails = $localStorage.foodBasicDetails;
});






