angular.module('sportsStore')
    .controller('cartSummaryController', function ($scope, cart) {
        $scope.cartData = cart.getProducts();

        $scope.total = function () {
            var total = 0;
            for (item in $scope.cartData) {
                var product = $scope.cartData[item];
                total += product.price * product.count;
            }
            return total;
        };

        $scope.remove = function (id) {
            cart.removeProduct(id);
        };
    });
