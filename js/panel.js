define(
    function(require, exports, module)
    {
        let id = "CBRACKETS.panel",
            panel = null;

        let WorkspaceManager = brackets.getModule("view/WorkspaceManager"),
            ExtensionUtils = brackets.getModule("utils/ExtensionUtils");


        ExtensionUtils.loadStyleSheet(module, "../css/panel.css");
        panel = WorkspaceManager.createBottomPanel(id, $(require("text!../html/panel.html")), 200);

        $('<img src="' + require.toUrl("../icons/play.svg") + '">').appendTo($('[class="btn CBRACKETS__BUTTON"]')[0]);
        $('<img src="' + require.toUrl("../icons/stop.svg") + '">').appendTo($('[class="btn CBRACKETS__BUTTON"]')[1]);

        return panel;
    });
