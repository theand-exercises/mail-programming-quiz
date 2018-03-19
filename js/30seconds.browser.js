

/*
 * https://30secondsofcode.org/
 */

//https://30secondsofcode.org/#arraytohtmllist
const arrayToHtmlList = (arr, listID) =>
    arr.map(item => (document.querySelector('#' + listID).innerHTML += `<li>${item}</li>`));

//https://30secondsofcode.org/#copytoclipboard
const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};

//https://30secondsofcode.org/#createelement
const createElement = str => {
    const el = document.createElement('div');
    el.innerHTML = str;
    return el.firstElementChild;
};

//https://30secondsofcode.org/#createeventhub
const createEventHub = () => ({
    hub: Object.create(null),
    emit(event, data) {
        (this.hub[event] || []).forEach(handler => handler(data));
    },
    on(event, handler) {
        if (!this.hub[event]) this.hub[event] = [];
        this.hub[event].push(handler);
    },
    off(event, handler) {
        const i = (this.hub[event] || []).findIndex(h => h === handler);
        if (i > -1) this.hub[event].splice(i, 1);
    }
});

//https://30secondsofcode.org/#currenturl
const currentURL = () => window.location.href;

//https://30secondsofcode.org/#detectdevicetype
const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'Mobile'
        : 'Desktop';

//https://30secondsofcode.org/#hasclass
const hasClass = (el, className) => el.classList.contains(className);

//https://30secondsofcode.org/#hashbrowser
const hashBrowser = val =>
    crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(val)).then(h => {
        let hexes = [],
            view = new DataView(h);
        for (let i = 0; i < view.byteLength; i += 4)
            hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
        return hexes.join('');
    });

//https://30secondsofcode.org/#hide
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

//https://30secondsofcode.org/#httpsredirect
const httpsRedirect = () => {
    if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

//https://30secondsofcode.org/#observemutations
const observeMutations = (element, callback, options) => {
    const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));
    observer.observe(
        element,
        Object.assign(
            {
                childList: true,
                attributes: true,
                attributeOldValue: true,
                characterData: true,
                characterDataOldValue: true,
                subtree: true
            },
            options
        )
    );
    return observer;
};

//https://30secondsofcode.org/#off
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);

//https://30secondsofcode.org/#on
const on = (el, evt, fn, opts = {}) => {
    const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
    el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
    if (opts.target) return delegatorFn;
};

//https://30secondsofcode.org/#onuserinputchange
const onUserInputChange = callback => {
    let type = 'mouse',
        lastTime = 0;
    const mousemoveHandler = () => {
        const now = performance.now();
        if (now - lastTime < 20)
            (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);
        lastTime = now;
    };
    document.addEventListener('touchstart', () => {
        if (type === 'touch') return;
        (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);
    });
};

//https://30secondsofcode.org/#redirect
const redirect = (url, asLink = true) =>
    asLink ? (window.location.href = url) : window.location.replace(url);

//https://30secondsofcode.org/#scrolltotop
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

//https://30secondsofcode.org/#setstyle
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

//https://30secondsofcode.org/#show
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

//https://30secondsofcode.org/#toggleclass
const toggleClass = (el, className) => el.classList.toggle(className);

//https://30secondsofcode.org/#uuidgeneratorbrowser
const UUIDGeneratorBrowser = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );























