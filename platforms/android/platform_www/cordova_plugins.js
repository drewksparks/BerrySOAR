cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "urbanairship-cordova.UrbanAirship",
        "file": "plugins/urbanairship-cordova/www/UrbanAirship.js",
        "pluginId": "urbanairship-cordova",
        "clobbers": [
            "UAirship"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "urbanairship-cordova": "6.6.0",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-statusbar": "2.2.3"
};
// BOTTOM OF METADATA
});