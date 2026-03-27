Hooks.on('ready', () => {
    // Create a control button in the UI
    let controls = document.querySelector('.app');
    let transparencyButton = document.createElement('button');
    transparencyButton.innerHTML = 'Set Foreground Transparency';
    transparencyButton.addEventListener('click', () => {
        let transparency = prompt("Enter transparency level (0 - 1, where 0 is fully transparent):");
        transparency = parseFloat(transparency);
        if (!isNaN(transparency) && transparency >= 0 && transparency <= 1) {
            // Apply the transparency to the foreground layer
            document.querySelector('.layer-foreground').style.opacity = transparency;
        } else {
            ui.notifications.warn('Invalid transparency value. Please enter a number between 0 and 1.');
        }
    });
    controls.appendChild(transparencyButton);
});