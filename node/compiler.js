/**
 * @constant {Function} spawn - starts child process
 */
const { spawn } = require('child_process');

/**
 * The channel between client and server js scripts
 * @type {DomainManager}
 */
var domain;

/**
 * Compiles given file or project
 * @param {String} path - path to file opened when bild button was clicked
 */
function build(path)
{
    let cmd = spawn('cmd');

    cmd.stdout.on('data',
        (data) =>
        {
            domain.emitEvent('compiler', 'data', data);
        });

    cmd.stderr.on('data',
        (data) =>
        {
            domain.emitEvent('compiler', 'data', data);
        });

    setTimeout(
        ()=>
        {
            cmd.stdin.write('g++ D:/Bool.cpp -o D:/Bool.exe');
            cmd.stdin.end();
        }, 1000);
}

/**
 * Initializes compiler domain
 * @param {DomainManager} domainManager - the channel between client and server js scripts
 */
function init(domainManager)
{
    domain = domainManager;

    if (!domain.hasDomain('compiler'))
    {
        domain.registerDomain('compiler', {major: 0, minor: 1});
    }

    domain.registerCommand(
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

    domain.registerEvent(
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
