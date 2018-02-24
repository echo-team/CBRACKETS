define(
    function(require, exports, module)
    {
        let environment =
            {
                managers:
                {
                    panel: brackets.getModule("view/PanelManager")
                },
                utils:
                {
                    appInit: brackets.getModule("utils/AppInit")
                },
                modules:
                {
                    icon: null
                }
            };

        environment.utils.appInit.appReady(
            function()
            {
                environment.modules.icon = require("JS/icon");
            });
    });
