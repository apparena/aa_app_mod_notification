# Appalizr.com Module: Logging

Docs:   [Appalizr.com](http://www.appalizr.com/docs.html)

Shows a notification window, based on the jQuery plugin pNotify. With the „setOption“ method, you can define different options, like position, delay time, type [error, warning, info …] and some more.

```
NotificationView().init().setOptions({Object}).show();
```

### Dependencies
No module Dependencies.

## Include
### Require.js
```
define(['modules/aa_app_mod_notification/js/views/NotificationView'], function (NotificationView) {});
```

## Methods

### setOptions({Options},Reset)

#### Options

| Key   | Type    | Options | Default | Description |
| ----   | ----    | ---- | ---- | ---- |
| delay   | `int`    |  | 3000 | Delay time in ms |
| title   | `string`    |  |  | Notification headline |
| text   | `string`    |  |  | Notification text under the headline |
| type   | `string`    | success / error / notice / info | info | Notification type |
| position   | `string`    | stack-topright / stack-topleft / stack-bottomright / stack-bottomleft | stack-topright | position of the shown notification window |
| before_open   | `function`    |  |  | Function that is called, before a notice is shown. For example to define the exact position in a facebook iFrame. See examples. |

#### Reset
| Options | Default | Description |
| ---- | ---- | ---- |
| true / false | false | If this value is set, the settings will be reset to defaults. |


## Return
Nothing

## Examples

### Basic info
```
NotificationView().init().setOptions({
    title:       'Info',
    description: 'This is a special info for you!'
}).show();
```

### Error bottom right
```
NotificationView().init().setOptions({
    title:       'Error',
    description: 'An error occurred!'
    type:        'error',
    position:    'stack-bottomright',
    delay:       8000
}).show();
```
