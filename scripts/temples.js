// elem = document.querySelector('#lastModified');
// elem.innerText = 'Last Modified: ' + new Date(document.lastModified);

document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector('#lastModified');
    if (elem) {
        elem.textContent = `Last Modified: ${new Date(document.lastModified)}`;
    }
});
