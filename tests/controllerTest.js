describe('Controller Test', function () {
    var mockScope = {}, controller, backend, mockInterval, mockTimeout, mockLog;

    beforeEach(angular.mock.module('exampleApp'));

    beforeEach(angular.mock.inject(function ($httpBackend) {
        $httpBackend.expect('GET', 'productData.json').respond([
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
        ]);
        backend = $httpBackend;
    }));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, $http, $interval, $timeout, $log) {
        mockScope = $rootScope.$new();
        mockInterval = $interval;
        mockTimeout = $timeout;
        mockLog = $log;

        $controller('defaultCtrl', {
            $scope: mockScope,
            $http: $http,
            $interval: mockInterval,
            $timeout: mockTimeout,
            $log: mockLog
        });
        backend.flush();
    }));

    it('Create variable', function () {
        expect(mockScope.counter).toEqual(0);
    });

    it('Increments counter', function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });

    it('Makes an Ajax request', function () {
        backend.verifyNoOutstandingExpectation();
    });

    it('Processes the data', function () {
        expect(mockScope.products).toBeDefined();
        expect(mockScope.products.length).toEqual(10);
    });

    it('Preserves the data order', function () {
        expect(mockScope.products[0].name).toEqual('apples');
        expect(mockScope.products[1].name).toEqual('bananas');
        expect(mockScope.products[2].name).toEqual('pears');
    });

    it('Limits interval to 10 updates', function () {
        for (var i = 0; i < 11; i++) {
            mockInterval.flush(5000);
        }
        expect(mockScope.intervalCounter).toEqual(10);
    });

    it('Increments timer counter', function () {
        mockTimeout.flush(5000);
        expect(mockScope.timerCounter).toEqual(1);
    });

    it('Writes log messages', function () {
        expect(mockLog.log.logs.length).toEqual(1);
    });
});
