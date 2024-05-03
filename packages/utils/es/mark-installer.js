export const makeInstaller = (components = []) => {
    const install = (app) => {
        components.forEach(component => app.use(component));
    };
    return { install };
};
