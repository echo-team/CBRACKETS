define(
    function(require, exports, module)
    {
        let id = "CBRACKETS.panel",
            panel = null;

        let WorkspaceManager = brackets.getModule("view/WorkspaceManager"),
            ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

        /**
         * Binds listeners to buttons, located at toolbar
         * @param {String}   event [[Description]]
         * @param {Function} listener [[Description]]
         * @public
         */
        function addListener(event, listener)
        {
            let button = $('[id="CBRACKETS.' + event + ']')[0];

            if (button)
            {
                button.addEventListener('click', listener);
            }
        }

        ExtensionUtils.loadStyleSheet(module, "../css/panel.css");
        panel = WorkspaceManager.createBottomPanel(id, $(require("text!../html/panel.html")), 0);

        $('<img src="' + require.toUrl("../icons/play.svg") + '">').appendTo($('[class="btn CBRACKETS__BUTTON"]')[0]);
        $('<img src="' + require.toUrl("../icons/stop.svg") + '">').appendTo($('[class="btn CBRACKETS__BUTTON"]')[1]);
        $('<img src="' + require.toUrl("../icons/build.svg") + '">').appendTo($('[class="btn CBRACKETS__BUTTON"]')[2]);
        $('<img src="' + require.toUrl("../icons/settings.svg") + '">').appendTo($('[class="btn CBRACKETS__BUTTON"]')[3]);

        let answer =
            {
                DOM: panel,
                log: $('[id=CBRACKETS.log]'),
                buttons:
                {
                    run: $('[id=CBRACKETS.run]'),
                    stop: $('[id=CBRACKETS.stop]'),
                    build: $('[id=CBRACKETS.build]'),
                    settings: $('[id=CBRACKETS.settings]')
                },
                addListener: addListener
            };

        return answer;
    });
