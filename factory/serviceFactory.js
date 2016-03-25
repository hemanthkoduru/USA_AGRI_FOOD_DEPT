/**
 * Created by pli9247 on 3/25/2016.
 */

foodDataApp.factory("serviceFactory", ['$http','$location' ,function ($http, $location, constantFactory) {

    return {
        serviceCall: function (serviceURL, successCallBack, failureCallBack) {
            var baseURL = 'http://api.nal.usda.gov/ndb/';
            var url = baseURL + serviceURL;

            $http({
                method: "GET",
                url: url,
            }).then(function mySucces(response) {
                successCallBack(response);
            }, function myError(response) {
                failureCallBack(response);
            });


        }
    }
}]);

