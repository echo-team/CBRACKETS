define(
    function(require, exports, module)
    {
        let NodeDomain = brackets.getModule('utils/NodeDomain'),
            ExtensionUtils = brackets.getModule('utils/ExtensionUtils');

        /**
         * Channel between client and server js scripts to exec system commands
         * @type {NodeDomain}
         */
        let compiler = new NodeDomain('compiler', ExtensionUtils.getModulePath(module, 'node/compiler'));

        /**
         * Passes output of compiler from cmd/terinal into panel
         * @listens data - event of data appearing in server cmd/terminal
         */
        compiler.on('data',
            () =>
            {

            });

        /**
         * Builds given file
         * @param {String} path - path to file to build
         */
        function build(path)
        {
            compiler.exec('build', path);
        }
    });
