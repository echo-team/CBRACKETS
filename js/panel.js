define(
    function(require, exports, module)
    {
        let id = "CBRACKETS.panel",
            panel = null,
            WorkspaceManager = brackets.getModule("view/WorkspaceManager"),
            ExtensionUtils = brackets.getModule("utils/ExtensionUtils");


        ExtensionUtils.loadStyleSheet(module, "../css/panel.css");
        panel = WorkspaceManager.createBottomPanel(id, $(require("text!../html/panel.html")), 200);

        return panel;
    });
