angular.module('sportsStoreAdmin')
    .constant('authUrl', 'http://auth15.apiary-mock.com/login')
    .constant('ordersUrl', 'http://orders5.apiary-mock.com/orders')
    .controller('authCtrl', function ($scope, $http, $location, authUrl) {
        $scope.authenticate = function (user, pass) {
            $http.post(authUrl, {
                username: user,
                password: pass
            }, {
                withCredential: true
            }).success(function (data) {
                $location.path('/main');
            }).error(function (error) {
                $scope.authenticationError = error;
            });
        };
    })
    .controller('mainCtrl', function ($scope) {
        $scope.screens = ['Products', 'Orders'];
        $scope.current = $scope.screens[0];

        $scope.setScreen = function (index) {
            $scope.current = $scope.screens[index];
        };

        $scope.getScreen = function () {
            return $scope.current === 'Products' ?
                '/views/adminProducts.html' : '/views/adminOrders.html';
        };
    })
    .controller('ordersCtrl', function ($scope, $http, ordersUrl) {
        $http.get(ordersUrl)
            .success(function (data) {
                $scope.orders = data;
            })
            .error(function (error) {
                $scope.error = error;
            });

        $scope.selectedOrder = null;

        $scope.selectOrder = function (order) {
            $scope.selectedOrder = order;
        };

        $scope.calcTotal = function (order) {
            var total = 0;

            for (var i = 0; i < order.products.length; i++) {
                var product = order.products[i];
                total += product.count * product.price;
            }

            return total;
        };
    });
