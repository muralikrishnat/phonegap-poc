cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "phonegap-plugin-push.PushNotification",
      "file": "plugins/phonegap-plugin-push/www/push.js",
      "pluginId": "phonegap-plugin-push",
      "clobbers": [
        "PushNotification"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-support-google-services": "1.3.2",
    "phonegap-plugin-multidex": "1.0.0",
    "phonegap-plugin-push": "2.3.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});