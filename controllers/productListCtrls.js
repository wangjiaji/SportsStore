angular.module('sportsStore')
    .constant('productListActiveClass', 'btn-primary')
    .constant('productListDefaultClass', 'btn-default')
    .constant('productListPageCount', 3)
    .controller('productListCtrl', function ($scope, $filter, productListActiveClass, productListDefaultClass, productListPageCount) {
        var selectedCategory = undefined;

        $scope.selectedPage = 0;
        $scope.pageSize = productListPageCount;
    
        $scope.selectCategory = function (category) {
            selectedCategory = category;
            $scope.selectedPage = 0;
        };

        $scope.selectPage = function (page) {
           $scope.selectedPage = page;
        }; 
    
        $scope.categoryFilterFn = function (product) {
            return angular.isUndefined(selectedCategory) || product.category === selectedCategory;
        };

        $scope.getCategoryClass = function (category) {
            return selectedCategory === category ? productListActiveClass : productListDefaultClass;
        };

        $scope.getPageClass = function (page) {
            return $scope.selectedPage === page ? productListActiveClass : productListDefaultClass;
        };
});
