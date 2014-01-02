require.config({
    paths: {
        'pnotify': 'libs/jquery.pnotify'
    },
    'pnotify': {
        deps:    ['jquery'],
        exports: 'pnotify'
    }
});

define([
    'jquery',
    'underscore',
    'backbone',
    'pnotify',
    'modules/notification/js/models/NotificationModel'
], function ($, _, Backbone, Pnotify, NotificationModel) {
    'use strict';

    var namespace = 'notification',
        View, Init, Remove, Instance;

    View = Backbone.View.extend({
        initialize: function (options) {
            this.setOptions(options);
            $.pnotify.defaults.history = false;
        },

        /**
         * set notification options
         * @param options json - (title|description|type(info)|delay(3000)|position(stack-topright)
         * @param reset mixed - when defined, that model was not reset
         * @returns {*}
         */
        setOptions: function (options, reset) {
            //this.model = new NotificationModel();

            if (_.isUndefined(_.singleton.model.notification)) {
                _.singleton.model.notification = new NotificationModel();
            }
            this.model = _.singleton.model.notification;

            if (_(reset).isUndefined()) {
                this.resetOptions();
            }

            this.model.set(options);
            return this;
        },

        show: function () {
            $.pnotify({
                delay:       this.model.get('delay'),
                title:       this.model.get('title'),
                text:        this.model.get('description'),
                type:        this.model.get('type'),
                addclass:    this.model.get('position'),
                before_open: this.model.get('before_open') || '',
                styling:     'bootstrap',
                sticker:     false
            });
            return this;
        },

        resetOptions: function () {
            //_.debug.log('reset option');
            this.model.clear({silent: true}).set(this.model.defaults);
            return this;
        }
    });

    Remove = function () {
        _.singleton.view[namespace].unbind().remove();
        delete _.singleton.view[namespace];
    };

    Init = function (init) {

        if (_.isUndefined(_.singleton.view[namespace])) {
            _.singleton.view[namespace] = new View();
        } else {
            if (!_.isUndefined(init) && init === true) {
                Remove();
                _.singleton.view[namespace] = new View();
            }
        }

        return _.singleton.view[namespace];
    };

    Instance = function () {
        return _.singleton.view[namespace];
    };

    return {
        init:        Init,
        view:        View,
        remove:      Remove,
        namespace:   namespace,
        getInstance: Instance
    };
});