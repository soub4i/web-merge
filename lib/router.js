
const routerWarper = (type) => {
    const orig = history[type];
    return function () {
        const rv = orig.apply(this, arguments);
        const e = new Event(type);
        e.arguments = arguments;
        window.dispatchEvent(e);
        return rv;
    };
};


window.history.pushState = routerWarper('pushState')
window.history.replaceState = routerWarper('replaceState');


export default class Router {
    base = "/";
    constructor(opts = {}) {
        if (opts.base) this.base = opts.base;
    }

    onNavigate(to) {
        if (to) {
            const { origin } = window.location
            window.history.pushState({}, to, origin + this.base + to)
        }
    }

    set base(base) {
        this.base = base
    }


}

