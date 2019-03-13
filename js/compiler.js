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
         * Container for output from cmd/terminal
         * @type {Element}
         */
        let log;

        /**
         * Passes output of compiler from cmd/terinal into panel
         * @listens data - event of data appearing in server cmd/terminal
         */
        compiler.on('data',
            (data) =>
            {
                log.innerHTML += data + '';
            });

        /**
         * Binds element where output from cmd/terminal will be displayed
         * @param {Element} panelLog - logging element
         */
        function bindLog(panelLog)
        {
            log = panelLog;
        }

        /**
         * Builds given file
         * @param {String} path - path to file to build
         */
        function build(path)
        {
            compiler.exec('build', path);
        }

        /**
         * Public parts of class
         * @type {Object}
         */
        let answer =
            {
                bindLog: bindLog,
                build: build.bind(this)
            }
        return answer;
    });
