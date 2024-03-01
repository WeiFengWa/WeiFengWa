export function withInstall(comp) {
    const { name } = comp;
    comp.install = (app) => {
        app.component(name, comp);
    };
    return comp;
}
