const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveOnAnyPanel();
        panel.classList.add('active');
    })
})

function removeActiveOnAnyPanel() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}