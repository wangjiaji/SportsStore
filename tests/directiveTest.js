describe('Directive Test', function () {
    var mockScope, compileService;

    beforeEach(angular.mock.module('exampleApp'));

    beforeEach(angular.mock.inject(function ($rootScope, $compile) {
        mockScope = $rootScope.$new();
        compileService = $compile;
        mockScope.data = [
            { "name": "apples", "category": "fruit", "price": 1.20, "expiry": 10 },
            { "name": "bananas", "category": "fruit", "price": 2.42, "expiry": 7 },
            { "name": "pears", "category": "fruit", "price": 2.02, "expiry": 6 },
            { "name": "kiwi", "category": "fruit", "price": 4.17, "expiry": 8 },
            { "name": "Tuna", "category": "fish", "price": 20.45, "expiry": 3 },
            { "name": "salmon", "category": "fish", "price": 17.94, "expiry": 2 },
            { "name": "trout", "category": "fish", "price": 12.93, "expiry": 4 },
            { "name": "beer", "category": "drinks", "price": 2.99, "expiry": 365 },
            { "name": "wine", "category": "drinks", "price": 8.99, "expiry": 365 },
            { "name": "whiskey", "category": "drinks", "price": 45.99, "expiry": 365 }
        ];
    }));

    it('Generates list elements', function () {
        var compileFn = compileService('<div unordered-list="data"></div>');
        var elem = compileFn(mockScope);

        expect(elem.children('ul').length).toEqual(1);
        expect(elem.find('li').length).toEqual(10);
        expect(elem.find('li').eq(0).text()).toEqual('apples');
        expect(elem.find('li').eq(1).text()).toEqual('bananas');
        expect(elem.find('li').eq(2).text()).toEqual('pears');
    });
});
