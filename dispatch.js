class DispatchWrapper {
    constructor(dispatch) {
        this._dispatch = dispatch;
        this._hooks = [];
    }

    hook(...args) {
        this._hooks.push(this._dispatch.hook(...args));
    }

    hookOnce(...args) {
        this._dispatch.hookOnce(...args);
    }

    unhook(...args) {
        throw new Error("unhook not supported for tera-guide");
    }

    _remove_all_hooks() {
        for(const hook of this._hooks) this._dispatch.unhook(hook);
    }

    get require() {
        return this._dispatch.require;
    }

    toServer(...args) { return this.send(...args); }
    toClient(...args) { return this.send(...args); }
    send(...args) { return this._dispatch.send(...args); }
}

module.exports = DispatchWrapper;