// Layout 1

// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // --------- Update Copyright Year ---------
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // --------- Styled Favicon (Optimized for Tabs) ---------
    function makeFaviconStyled(src) {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            const size = 64;

            // Subtle accent values for favicon scale
            const border = 2;          // thinner border
            const shadowBlur = 4;      // smaller shadow
            const shadowOffsetY = 2;

            const canvas = document.createElement("canvas");
            canvas.width = size;
            canvas.height = size;

            const ctx = canvas.getContext("2d");

            const center = size / 2;
            const radius = center - shadowBlur;

            // ----- Shadow (subtle) -----
            ctx.shadowColor = "rgba(0,0,0,0.25)";
            ctx.shadowBlur = shadowBlur;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = shadowOffsetY;

            // Circle for shadow
            ctx.beginPath();
            ctx.arc(center, center, radius, 0, Math.PI * 2);
            ctx.fillStyle = "transparent";
            ctx.fill();

            // Disable shadow for image + border
            ctx.shadowColor = "transparent";

            // ----- Clip image -----
            ctx.save();
            ctx.beginPath();
            ctx.arc(center, center, radius - border, 0, Math.PI * 2);
            ctx.clip();

            ctx.drawImage(img, 0, 0, size, size);

            ctx.restore();

            // ----- Subtle Border Accent -----
            ctx.lineWidth = border;
            ctx.strokeStyle = "#ffffff";

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
