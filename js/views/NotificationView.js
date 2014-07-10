require.config({
    paths: {
        'pnotify': '../modules/aa_app_mod_notification/js/libs/jquery/jquery.pnotify'
    }
});

define([
    'ViewExtend',
    'jquery',
    'underscore',
    'backbone',
    'modules/aa_app_mod_notification/js/models/NotificationModel',
    'pnotify'
], function (View, $, _, Backbone, NotificationModel) {
    'use strict';

    return function () {
        View.namespace = 'notification';

        View.code = Backbone.View.extend({
            initialize: function (options) {
                _.bindAll(this, 'setOptions', 'show', 'resetOptions');

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
                this.model = NotificationModel().init();

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
                    styling:     'bootstrap3',
                    sticker:     false,
                    history:     false/*,
                    stack: {
                        "dir1":    "down",
                        "dir2":    "left",
                        "context": $("#stack-context")
                    }*/
                });
                return this;
            },

            resetOptions: function () {
                this.model.clear({silent: true}).set(this.model.defaults);
                return this;
            }
        });

        return View;
    }
});