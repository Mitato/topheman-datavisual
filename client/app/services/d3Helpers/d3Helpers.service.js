'use strict';

angular.module('tophemanDatavizApp')
        .service('d3Helpers', function($timeout) {

          return {
            //from http://davidwalsh.name/javascript-debounce-function
            // Returns a function, that, as long as it continues to be invoked, will not
            // be triggered. The function will be called after it stops being called for
            // N milliseconds. If `immediate` is passed, trigger the function on the
            // leading edge, instead of the trailing.
            // edit : changed setTimeout and clearTimeout to use angular $timeout
            debounce: function(func, wait, immediate) {
              var timeout;
              return function() {
                var context = this, args = arguments;
                $timeout.cancel(timeout);
                timeout = $timeout(function() {
                  timeout = null;
                  if (!immediate)
                    func.apply(context, args);
                }, wait);
                if (immediate && !timeout)
                  func.apply(context, args);
              };
            }
          };

        });
