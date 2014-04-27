angular.module('customFilters', [])
    .filter('unique', function () {
        return function (data, propertyName) {
            if (angular.isArray(data) && angular.isString(propertyName)) {
                var results = [], values = {};
                data.forEach(function (d) {
                    var value = d[propertyName];
                    if (angular.isUndefined(values[value])) {
                        results.push(value);
                        values[value] = true;
                    }
                });
                return results;
            } else {
                return data;
            }
        };
    })
    .filter('range', function () {
        return function (data, page, size) {
            if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
                var start_index = page * size;
                return data.slice(start_index, start_index + size);
            } else {
                return data;
            }
        }
    })
    .filter('pageCount', function () {
        return function (data, size) {
            if (angular.isArray(data) && angular.isNumber(size)) {
                var result = [],
                    total_pages = Math.ceil(data.length / size);
                for (var i = 0; i < total_pages; i++) {
                    result.push(i);
                }
                return result;
            } else {
                return data;
            }
        };
    });
