define(
    function(require, exports, module)
    {
        const spawn = require('child_process');

        /**
         * Builds given file
         * @param {String} path - path to file to build
         */
        function build(path)
        {
            let cmd = spawn('cmd');

            cmd.stdout.on('data',
                function(data)
                {

                });

            cmd.stderr.on('data',
                function(data)
                {

                });

            setTimeout(
                () =>
                {

                }, 1000);
        }
    });
