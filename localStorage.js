'use strict';

angular.module('ngLocalStore', [])
    .factory('$localStore', [function () {
        var setItem = function(key, value){
            return localStorage.setItem(key, JSON.stringify(value));
        }

        var getItem = function(key){
            return JSON.parse(localStorage.getItem(key));
        }
        
        var removeItem = function (key) {
            return localStorage.removeItem(key);
        }

        return {
            set: setItem,
            get: getItem,
            remove: removeItem
        }
    }]);