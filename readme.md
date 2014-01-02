# App-Arena.com App Module: Logging
Github: https://github.com/apparena/aa_app_mod_notification

Docs:   http://www.app-arena.com/docs/display/developer

This is a module of the [aa_app_template](https://github.com/apparena/aa_app_template)

## Module job


### Dependencies
* Nothing

### Example
```javascript
...
```

### Load module with require








Install notification module
===========================

Put follow into the config.js (requirejs config file)

Path:
    'pnotify': '../modules/notification/js/libs/jquery.pnotify',

Shim:
    'pnotify': {
        deps:    ['jquery'],
        exports: 'pnotify'
    }

Put the follow line into the css/style.css
    @import "../modules/notification/css/jquery.pnotify.default.css";

Usage
===========================
* Load dependency in your view: 'modulesSrc/notification/js/views/NotificationView' => NotificationView
* Set some properties as json string and Initialize NotificationView
    var notice_prperties = {
        title:       'Title text in the notivication',
        description: 'A message or some description under the title',
        type:        'error', // error, success, notice, info (default)
        delay:       8000,
        position:    'stack-topright' // stack-bottomleft, stack-bottomright, stack-topleft, stack-topright (default)
    },
    notification = new NotificationView(notice_prperties);
* show notice
    notification.show();
* set new message and show
    var notice_prperties = {
        title:       'Title text in the notivication',
        description: 'A message or some description under the title',
        type:        'error', // error, success, notice, info (default)
        delay:       8000, (3000 = default)
        position:    'stack-topright' // stack-bottomleft, stack-bottomright, stack-topleft, stack-topright (default)
    },
    notification.setOptions(notice_prperties).show();