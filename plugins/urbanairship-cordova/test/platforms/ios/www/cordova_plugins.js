cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "urbanairship-cordova.UrbanAirship",
        "file": "plugins/urbanairship-cordova/www/UrbanAirship.js",
        "pluginId": "urbanairship-cordova",
        "clobbers": [
            "UAirship"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "urbanairship-cordova": "6.5.1"
};
// BOTTOM OF METADATA
});