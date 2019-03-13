define(
    function(require, exports, module)
    {
        let environment =
            {
                managers:
                {
                    panel: brackets.getModule("view/WorkspaceManager")
                },
                utils:
                {
                    appInit: brackets.getModule("utils/AppInit")
                },
                modules:
                {
                    icon: null,
                    panel: null
                }
            };

        environment.utils.appInit.appReady(
            function()
            {
                environment.modules.icon = require("js/icon");
                environment.modules.panel = require("js/panel");

                environment.modules.icon.bindPanel(environment.modules.panel);
            });
    });
