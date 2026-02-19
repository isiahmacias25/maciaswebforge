// Layout 1 

// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // --------- Update Copyright Year ---------
    const currentYear = new Date().getFullYear(); // get current year
    const yearElement = document.getElementById("year"); // target element by ID

    if (yearElement) {
        yearElement.textContent = currentYear; // update the text
    }

    // --------- Make Favicon Circular ---------
    function makeFaviconCircular(src) {
        const img = new Image(); // create image object
        img.src = src;

        img.onload = () => {
            const size = 64; // size of the favicon canvas
            const canvas = document.createElement("canvas"); // create canvas
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");

            // create circular clipping mask
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();

            // draw the image inside the circle
            ctx.drawImage(img, 0, 0, size, size);

            // replace the favicon href with the circular version
            const favicon = document.querySelector('link[rel="icon"]');
            if (favicon) {
                favicon.href = canvas.toDataURL("image/png");
            }
        };
    }

    // initialize circular favicon using existing link
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
        makeFaviconCircular(faviconLink.getAttribute("href"));
    }

});
