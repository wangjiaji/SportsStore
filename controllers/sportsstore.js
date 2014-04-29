angular.module('sportsStore')
    .constant('dataUrl', 'http://products7.apiary-mock.com/products')
    .constant('orderUrl', 'http://products7.apiary-mock.com/order')
    .controller('sportsStoreCtrl', function ($scope, $http, $location, dataUrl, orderUrl, cart) {
        $scope.data = {};

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (err) {
                $scope.data.error = err;
                console.warn(err);
            });

        $scope.sendOrder = function (shippingDetails) {
            var order = angular.copy(shippingDetails);
            order.products = cart.getProducts();

            $http.post(orderUrl, order)
                .success(function (data) {
                    $scope.data.orderId = data.id;
                    cart.getProducts().length = 0;
                })
                .error(function (err) {
                    $scope.data.orderError = err;
                })
                .finally(function () {
                    $location.path('/complete');
                });
        };
    });
