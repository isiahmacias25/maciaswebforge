// Layout 1

// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // --------- Update Copyright Year ---------
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // --------- Make Favicon Match .mainLogo Style ---------
    function makeFaviconStyled(src) {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            const size = 64;
            const border = 4;
            const shadowBlur = 10;
            const shadowOffsetY = 4;

            // Square canvas for proper centering
            const canvas = document.createElement("canvas");
            canvas.width = size + shadowBlur * 2;
            canvas.height = size + shadowBlur * 2;

            const ctx = canvas.getContext("2d");

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = size / 2;

            // ----- Shadow (box-shadow equivalent) -----
            ctx.shadowColor = "rgba(0,0,0,0.2)";
            ctx.shadowBlur = shadowBlur;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = shadowOffsetY;

            // Draw invisible circle to cast shadow
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fillStyle = "transparent";
            ctx.fill();

            // Disable shadow for image + border
            ctx.shadowColor = "transparent";

            // ----- Clip image into circle -----
            ctx.save();
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius - border, 0, Math.PI * 2);
            ctx.clip();

            ctx.drawImage(
                img,
                centerX - radius,
                centerY - radius,
                size,
                size
            );

            ctx.restore();

            // ----- Border (same as CSS) -----
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

    // --------- Initialize Styled Favicon ---------
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
        makeFaviconStyled(faviconLink.getAttribute("href"));
    }

});
