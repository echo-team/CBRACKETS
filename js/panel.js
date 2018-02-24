define(
    function(require, exports, module)
    {
        let id = "CBRACKETS.panel",
            panel = null,
            WorkspaceManager = brackets.getModule("view/WorkspaceManager");


        panel = WorkspaceManager.createBottomPanel(id, $(require("text!../html/panel.html")), 200);

        return panel;
    });
