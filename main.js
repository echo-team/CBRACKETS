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
                }
            };

        environment.utils.appInit.appReady(
            function()
            {

            });
    });
