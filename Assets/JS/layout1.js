// Layout 1 

// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // --------- Update Copyright Year ---------
    const currentYear = new Date().getFullYear(); // get current year
    const yearElement = document.getElementById("year"); // target element by ID

    if (yearElement) {
        yearElement.textContent = currentYear; // update the text
    }

// --------- Make Favicon Match .mainLogo Style ---------
function makeFaviconStyled(src) {
    const img = new Image();
    img.src = src;

    img.onload = () => {
        const size = 64;
        const border = 4;           // same as CSS
        const shadowBlur = 10;
        const shadowOffsetY = 4;

        const canvas = document.createElement("canvas");
        canvas.width = size + shadowBlur;
        canvas.height = size + shadowBlur;

        const ctx = canvas.getContext("2d");

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = size / 2;

        // ----- Shadow (matches CSS box-shadow) -----
        ctx.shadowColor = "rgba(0,0,0,0.2)";
        ctx.shadowBlur = shadowBlur;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = shadowOffsetY;

        // Draw circular image
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(
            img,
            centerX - radius,
            centerY - radius,
            size,
            size
        );

        ctx.restore?.();

        // ----- Border (matches CSS border) -----
        ctx.shadowColor = "transparent"; // no shadow on border
        ctx.lineWidth = border;
        ctx.strokeStyle = "#ffffff";

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - border / 2, 0, Math.PI * 2);
        ctx.stroke();

        // Replace favicon
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.href = canvas.toDataURL("image/png");
        }
    };
}

// Initialize
const faviconLink = document.querySelector('link[rel="icon"]');
if (faviconLink) {
    makeFaviconStyled(faviconLink.getAttribute("href"));
}
