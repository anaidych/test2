angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.loginconfident', {
        views: {
            app: {
                controller: 'app_loginconfident',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginconfident');
                }
            }
        }
    }).state('app.loginconfident1', {
        views: {
            app: {
                controller: 'app_loginconfident1',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginconfident1');
                }
            }
        }
    }).state('app.tabscaptivating', {
        views: {
            app: {
                controller: 'app_tabscaptivating',
                templateProvider: function (app) {
                    return app.templateProvider('app.tabscaptivating');
                }
            }
        }
    }).state('app.listviewconfident', {
        views: {
            app: {
                controller: 'app_listviewconfident',
                templateProvider: function (app) {
                    return app.templateProvider('app.listviewconfident');
                }
            }
        }
    });
});