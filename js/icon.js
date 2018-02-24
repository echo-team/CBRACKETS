define(
    function(require, exports, module)
    {
        function onClick(panel)
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
                onClick: (onClick).bind(this)
            };

        return answer;
    });
