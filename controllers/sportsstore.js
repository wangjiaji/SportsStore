angular.module('sportsStore').controller('sportsStoreCtrl', function ($scope) {
    $scope.data = {
        products: [{ name: 'A ball', description: 'It is round', category: 'Thing', price: 100 },
                    { name: 'An orange', description: 'It has a color', category: 'Fruit', price: 107 },
                    { name: 'Tiger', description: 'It bites and hurts', category: 'Animal', price: 307 },
                    { name: 'Titanic', description: 'Very touching', category: 'Movie', price: 197 }]
    }
});
