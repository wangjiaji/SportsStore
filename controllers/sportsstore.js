angular.module('sportsStore')
    .constant('dataUrl', 'http://products7.apiary-mock.com/products')
    .controller('sportsStoreCtrl', function ($scope, $http, dataUrl) {
        $scope.data = {};

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (err) {
                $scope.data.error = err;
                console.warn(err);
            });
    });
