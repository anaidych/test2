angular.module('app').controller('app_tabscaptivating', app_tabscaptivating);
function app_tabscaptivating($scope, app) {
    'use strict';
    app.init($scope);
    $scope.tabStyle = function (item) {
        if (item.selected) {
            return {
                margin: '0px',
                padding: '10px 15px',
                borderRight: '1px solid rgb(221, 221, 221)'
            };
        } else {
            return {
                margin: '0px',
                padding: '10px 15px',
                borderRight: '1px solid rgb(221, 221, 221)',
                borderBottom: 'border-bottom: 1px solid rgb(221, 221, 221)'
            };
        }
    };
}