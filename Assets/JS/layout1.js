// Layout 1

// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // --------- Update Copyright Year ---------
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // --------- PRO Favicon (Max Clarity Version) ---------
    function makeFaviconStyled(src) {
        const img = new Image();

        // Prevent cross-origin issues if hosted elsewhere
        img.crossOrigin = "anonymous";
        img.src = src;

        img.onload = () => {

            // Larger internal size → sharper downscaling in browser
            const size = 128;

            // Very subtle accent ring (optional)
            const border = 2;

            const canvas = document.createElement("canvas");
            canvas.width = size;
            canvas.height = size;

            const ctx = canvas.getContext("2d");

            const center = size / 2;
            const radius = center;

            // ----- Circular Clip (NO shrinking) -----
            ctx.save();
            ctx.beginPath();
            ctx.arc(center, center, radius - border, 0, Math.PI * 2);
            ctx.clip();

            // Draw image FULL SIZE (no padding)
            ctx.drawImage(img, 0, 0, size, size);

            ctx.restore();

            // ----- Clean Accent Ring -----
            ctx.lineWidth = border;
            ctx.strokeStyle = "#ffffff"; // change if you want

            ctx.beginPath();
            ctx.arc(center, center, radius - border / 2, 0, Math.PI * 2);
            ctx.stroke();

            // Replace favicon
            const favicon = document.querySelector('link[rel="icon"]');

            if (favicon) {
                favicon.href = canvas.toDataURL("image/png");
            }
        };
    }

    // --------- Initialize Styled Favicon ---------
    const faviconLink = document.querySelector('link[rel="icon"]');

    if (faviconLink) {
        makeFaviconStyled(faviconLink.getAttribute("href"));
    }

});
