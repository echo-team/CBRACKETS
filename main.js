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
                    panel: null,
                    compiler: null
                }
            };

        environment.utils.appInit.appReady(
            function()
            {
                environment.modules.icon = require("js/icon");
                environment.modules.panel = require("js/panel");
                environment.modules.compiler = require("js/compiler");

                environment.modules.icon.bindPanel(environment.modules.panel);
                environment.modules.compiler.bindLog(environment.modules.panel.log);
            });
    });
