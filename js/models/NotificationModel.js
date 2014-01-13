define([
    'ModelExtend',
    'underscore',
    'backbone'
], function (Model, _, Backbone) {
    'use strict';

    return function () {
        Model.namespace = 'notification';

        Model.code = Backbone.Model.extend({
            defaults: {
                title:       '',
                description: '',
                type:        'info',
                delay:       3000,
                position:    'stack-topright'
            }
        });

        return Model;
    }
});