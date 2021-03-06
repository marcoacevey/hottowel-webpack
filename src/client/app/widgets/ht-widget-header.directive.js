(function () {
    'use strict';

    module.exports = function (ngModule) {
        ngModule
            .directive('htWidgetHeader', htWidgetHeader);

        /* @ngInject */
        function htWidgetHeader() {
            //Usage:
            //<div ht-widget-header title="vm.map.title"></div>
            // Creates:
            // <div ht-widget-header=""
            //      title="Movie"
            //      allow-collapse="true" </div>
            var directive = {
                scope: {
                    'title': '@',
                    'subtitle': '@',
                    'rightText': '@',
                    'allowCollapse': '@'
                },
                template: require('./widget-header.html'),
                restrict: 'EA'
            };
            return directive;
        }
    };
})();
