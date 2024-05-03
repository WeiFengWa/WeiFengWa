"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInstaller = void 0;
const makeInstaller = (components = []) => {
    const install = (app) => {
        components.forEach(component => app.use(component));
    };
    return { install };
};
exports.makeInstaller = makeInstaller;
