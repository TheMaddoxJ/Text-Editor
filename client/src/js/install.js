const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    const jate = form.elements['jate'].value;
  
    postDb(jate);
  
    form.reset();
    fetchList();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.preventDefault();
    const jate = form.elements['jate'].value;
  
    postDb(jate);
  
    form.reset();
    fetchList();
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.preventDefault();
    const jate = form.elements['jate'].value;
  
    postDb(jate);
  
    form.reset();
    fetchList();
});
