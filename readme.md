# App-Arena.com App Module: Logging
* **Github:** https://github.com/apparena/aa_app_mod_notification
* **Docs:**   http://www.appalizr.com/index.php/notifications.html
* This is a module of the [aa_app_template](https://github.com/apparena/aa_app_template)

## Module job
Shows a notification window, based on the jQuery plugin pNotify. With the „setOption“ method, you can define different options, like position, delay time, type [error, warning, info …] and some more.

### Dependencies
* Nothing

### Important functions
* **setOptions** - set options for the notification window (options see below)
* **show** - shows the notification with the defined settings
* **resetOptions** - reset all options to the default ones

### Function parameter
#### setOptions({Options},Reset)
* Options (JSON)
| Key | Type | Options | Default | Description |
|--------|--------|--------|--------|--------|
| delay | int | &nbsp; | 3000 | Delay time in ms |
| title | string | &nbsp; | &nbsp; | Notification headline |
| text | string | &nbsp; | &nbsp; | Notification text under the headline |
| type | string | success / error / notice / info | info | Notification type |
| position | string | stack-topright / stack-topleft / stack-bottomright / stack-bottomleft | stack-topright | position of the shown notification window |
| before_open | function | &nbsp; | &nbsp; | 	Function that is called, before a notice is shown. For example to define the exact position in a facebook iFrame. See examples. |

* Reset (Boolean)
| Options | Default | Description |
|--------|--------|--------|
| true / false | false | If this value is set, the settings will be reset to defaults. |

### Example
#### Basic info
```javascript
NotificationView().init().setOptions({
    title:       'Info',
    description: 'This is a special info for you!'
}).show();
```

#### Error bottom right
```javascript
NotificationView().init().setOptions({
    title:       'Error',
    description: 'An error occurred!'
    type:        'error',
    position:    'stack-bottomright',
    delay:       8000
}).show();
```

#### Notification on facebook with current scroll position
```javascript
require([
    'modules/aa_app_mod_facebook/js/views/FacebookView',
    'modules/aa_app_mod_notification/js/views/NotificationView'
], function (FacebookView, NotificationView) {
    var facebook = FacebookView().init();

    // define notification position in facebook tabs. works also on normal pages
    facebook.getScrollPosition(function (position) {
        // define notification options
        var options = {
            title:       _.t('msg_team_founded_title_sucess'),
            description: _.t('msg_team_founded_desc_sucess'),
            type:        'success'
        };

        // define notification position
        if (position !== false) {
            options.before_open = function (pnotify) {
                pnotify.css({
                    'top':  position.top,
                    'left': 810 - pnotify.width()
                });
            };
            options.position = '';
        }

        // show notification
        NotificationView().init().setOptions(options, true).show();
    });
});
```

### Load module with require
```
modules/aa_app_mod_notification/js/views/NotificationView
```

## Install notification module
Put follow into the config.js (requirejs config file)

* Path:
```javascript
'pnotify': '../modules/aa_app_mod_notification/js/libs/jquery.pnotify',
```

* Shim:
```javascript
'pnotify': {
	deps:    ['jquery'],
	exports: 'pnotify'
}
```