angular.module('sportsStoreAdmin')
    .constant('productUrl', 'http://products7.apiary-mock.com/products/')
    .controller('productCtrl', function ($scope, $resource, productUrl) {
        $scope.productsResource = $resource(productUrl + ':id', { id: '@id' });

        $scope.listProducts = function () {
            $scope.products = $scope.productsResource.query();
        };

        $scope.deleteProduct = function (product) {
            product.$delete().then(function () {
                $scope.products.splice($scope.products.indexOf(product), 1);
            });
        };

        $scope.createProduct = function (product) {
            new $scope.productsResource(product).$save().then(function (newProduct) {
                $scope.products.push(product);
                $scope.editedProduct = null;
            });
        };

        $scope.updateProduct = function (product) {
            product.save();
            $scope.editedProduct = null;
        };

        $scope.startEdit = function (product) {
            $scope.editedProduct = product;
        };

        $scope.cancelEdit = function () {
            $scope.editedProduct = null;
        };

        $scope.listProducts();
    });

