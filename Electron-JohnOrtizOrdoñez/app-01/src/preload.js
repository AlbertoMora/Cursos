const setVersion = (elementId, version) => {
    const element = document.getElementById(elementId);

    if (element) element.innerText = version;
};

window.addEventListener('DOMContentLoaded', () => {
    const components = ['node', 'chrome', 'electron'];

    console.log(process.versions);

    components.forEach(e => {
        setVersion(`version-${e}`, process.versions[e]);
    });
});
