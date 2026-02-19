// Layout 1

// This script automatically updates the copyright year  so it always shows the current year:                
/* Wait until the HTML document is fully loaded */
document.addEventListener("DOMContentLoaded", function () {

    /* Get the current year from the user's system */
    const currentYear = new Date().getFullYear();

    /* Find the element in the HTML with the ID "year" */
    const yearElement = document.getElementById("year");

    /* If the element exists, update its text */
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

});

// Make favicon circular
function makeFaviconCircular(src) {
}

// Initialize favicon using existing link href
const faviconLink = document.querySelector('link[rel="icon"]');
if (faviconLink) {
  makeFaviconCircular(faviconLink.getAttribute('href'));
}
