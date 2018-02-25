define(
    function(require, exports, module)
    {
        function bindPanel(panel)
        {
            icon.on("click",
                event =>
                {
                    if (panel.isVisible())
                    {
                        panel.hide();
                    }
                    else
                    {
                        panel.show();
                    }
                });
        }

        let icon = $("<a class='CBRACKETS__ICON' href='#'></a>").appendTo("#main-toolbar .buttons"),
            answer =
            {
                bindPanel: (bindPanel).bind(this)
            };

        return answer;
    });
