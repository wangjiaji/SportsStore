angular.module('cart', []).factory('cart', function () {
    var cartData = {};

    return {
        addProduct: function (id, name, price) {
            if (angular.isDefined(cartData[id])) {
                cartData[id].count++;
            } else {
                cartData[id] = { count: 1, id: id, price: price, name: name };
            }
        },

        removeProduct: function (id) {
            delete cartData[id];
        },

        getProducts: function () {
            return cartData;
        }
    };
})
.directive('cartSummary', function (cart) {
    return {
        restrict: 'E',
        templateUrl: 'components/cart/cartSummary.html',
        controller: function ($scope) {
            var cartData = cart.getProducts();

            $scope.total = function () {
                var total = 0;
                for (item in cartData) {
                    var product = cartData[item];
                    total += product.price * product.count;
                }
                return total;
            };

            $scope.itemCount = function () {
                var total = 0;
                for (item in cartData) {
                    var product = cartData[item];
                    total += product.count;
                }
                return total;
            };
        }
    };
});
