
/**
 * Lectures Page JavaScript
 * Handles slide preview selection and language switching
 */

document.addEventListener('DOMContentLoaded', () => {
    initLectureSelector();
});

function initLectureSelector() {
    const outputFrame = document.getElementById('slide-preview');
    const titleDisplay = document.getElementById('preview-title');
    const downloadEnInfo = document.getElementById('download-en');
    const downloadFrInfo = document.getElementById('download-fr');

    // Select all lecture buttons
    const lectureButtons = document.querySelectorAll('.lecture-btn');

    if (!outputFrame || !lectureButtons.length) return;

    lectureButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            lectureButtons.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Get data attributes
            const pdfEn = btn.getAttribute('data-pdf-en');
            const pdfFr = btn.getAttribute('data-pdf-fr');
            const title = btn.getAttribute('data-title');

            // Update Preview (Defaulting to EN for English page, FR for French page logic handled by html structure)
            // We will check the document lang to decide default preview
            const isFrench = document.documentElement.lang === 'fr';
            const defaultPdf = isFrench ? pdfFr : pdfEn;

            outputFrame.src = defaultPdf;
            titleDisplay.textContent = title;

            // Update Download Links
            downloadEnInfo.href = pdfEn;
            downloadFrInfo.href = pdfFr;
        });
    });
}
