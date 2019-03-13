/**
 * Compiles given file or project
 * @param {String} path - path to file opened when bild button was clicked
 */
function build(path)
{

}

/**
 * Initializes compiler domain
 * @param {DomainManager} domainManager - the channel between client and server js scripts
 */
function init(domainManager)
{
    if (!domainManager.hasDomain('compiler'))
    {
        domainManager.registerDomain('compiler', {major: 0, minor: 1});
    }

    domainManager.registerCommand(
        'compiler',
        'build',
        build,
        false,
        'Compiles given file or project',
        [
            {
                name: 'path',
                type: 'string',
                description: 'path to file opened when bild button was clicked'
            }
        ]);

    domainManager.registerEvent(
        'compiler',
        'data',
        [
            {
                name: 'data',
                type: 'string',
                description: 'cmd output of process, running in it'
            }
        ]);
}
