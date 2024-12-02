export const userAgentToBrowser = (userAgent: string): string => {
    /*
    User agent is the string that a web browser sends to a web server to identify itself
    this is split into 3 parts: Browser/Version <Notes>
    Firefox UA string:
    Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
    Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0

    Chrome UA string:
    Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36

    Safari UA string:
    Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1

    Internet Explorer UA string:
    Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)
    */

    const browserPriority = [
        'chrome',
        'firefox',
        'safari',
    ];
    const browser = {
        name: '',
        version: '',
    }
    const ua = userAgent.toLowerCase();
    for (const b of browserPriority) {
        if (ua.includes(b)) {
            browser.name = b;
            const agents = ua.split(' ');
            for (const agent of agents) {
                if (agent.includes(b)) {
                    const version = agent.split('/')[1];
                    browser.version = version;
                    break;
                }
            }

            return `${browser.name} ${browser.version}`;
        }
    }

    return 'Unknown';
}


export const pathMatchesShape = (path: string, shape: string): boolean => {
    // check the path against the shape

    if (shape === path || shape === '*') {
        return true;
    }

    // dont allow query strings for non-exact matches
    path = path.split('?')[0];
    shape = shape.split('?')[0];

    // dont check sections
    path = path.split('#')[0];
    shape = shape.split('#')[0];

    // remove any http:// or https://
    path = path.replace('http://', '');
    path = path.replace('https://', '');
    shape = shape.replace('http://', '');
    shape = shape.replace('https://', '');

    // remove any domain name and port if present
    const firstBlock = path.split('/')[0];
    if (firstBlock.includes('.') || (firstBlock.includes(':') && !firstBlock.startsWith(':'))) {
        path = path.split('/').slice(1).join('/');
    }

    // remove any trailing slashes
    path = path.endsWith('/') ? path.slice(0, -1) : path;
    shape = shape.endsWith('/') ? shape.slice(0, -1) : shape;

    // remove any leading slashes
    path = path.startsWith('/') ? path.slice(1) : path;
    shape = shape.startsWith('/') ? shape.slice(1) : shape;

    const shapeParts = shape.split('/');
    const pathParts = path.split('/');

    for (let i = 0; i < Math.max(pathParts.length, shapeParts.length); i++) {
        if (shapeParts.length <= i) {
            return false;
        }
        if (shapeParts[i] === '*') {
            return true;
        }
        if (shapeParts[i].startsWith(':')) {
            continue;
        }
        if (pathParts.length <= i) {
            return false;
        }
        if (shapeParts[i] !== pathParts[i]) {
            return false;
        }
    }

    return true;
}