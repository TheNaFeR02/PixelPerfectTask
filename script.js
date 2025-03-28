// script.js
function toggleAll(source) {
    // Select ALL checkboxes EXCEPT the "All pages" one
    const checkboxes = document.querySelectorAll('.pages-scroll input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = source.checked;
    });
}