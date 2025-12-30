/**
 * Portfolio JavaScript
 * Minimal interactivity for academic portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    initSmoothScroll();

    // Handle project card clicks
    initProjectLinks();

    // Add scroll-based nav styling
    initNavScroll();
});

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Handle project demo links
 * Replace "#" with actual Streamlit URLs once deployed
 */
function initProjectLinks() {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        // If the link is a placeholder (href="#"), show the "Coming Soon" notice
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showDeploymentNotice();
            });
        }
    });
}

/**
 * Show notice when project isn't deployed yet
 */
function showDeploymentNotice() {
    // Create a simple toast notification
    const notice = document.createElement('div');
    notice.className = 'toast-notice';
    notice.textContent = 'Demo coming soon! Deploy to Streamlit Cloud to enable.';
    notice.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #1a1a2e;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 0.9rem;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    document.body.appendChild(notice);

    // Fade in
    requestAnimationFrame(() => {
        notice.style.opacity = '1';
    });

    // Remove after 3 seconds
    setTimeout(() => {
        notice.style.opacity = '0';
        setTimeout(() => notice.remove(), 300);
    }, 3000);
}

/**
 * Add shadow to nav on scroll
 */
function initNavScroll() {
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
}
