"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withInstall = void 0;
function withInstall(comp) {
    const { name } = comp;
    comp.install = (app) => {
        app.component(name, comp);
    };
    return comp;
}
exports.withInstall = withInstall;
