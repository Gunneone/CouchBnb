// CouchBnB - Main Application JavaScript

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize date picker with current month/year
    initializeDatePicker();

    // Initialize star rating to 5
    updateStarRating(5);

    // Set button text based on device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const downloadBtn = document.getElementById('download-btn');
    if (isMobile) {
        downloadBtn.textContent = 'Share';
    } else {
        downloadBtn.textContent = 'Download';
    }

    // Set up event listeners
    setupEventListeners();
    
    // Set up crop modal event listeners
    setupCropModal();
}

function setupCropModal() {
    document.getElementById('crop-close').addEventListener('click', closeCropModal);
    document.getElementById('crop-cancel').addEventListener('click', closeCropModal);
    document.getElementById('crop-apply').addEventListener('click', applyCrop);
    
    // Close modal on background click
    document.getElementById('crop-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCropModal();
        }
    });
}

function initializeDatePicker() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    // Set month
    document.getElementById('review-month').value = currentMonth;
    
    // Populate year dropdown (current year - 1 to current year + 1)
    const yearSelect = document.getElementById('review-year');
    for (let year = currentYear - 1; year <= currentYear + 1; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        if (year === currentYear) {
            option.selected = true;
        }
        yearSelect.appendChild(option);
    }
}

function setupEventListeners() {
    // Name input (no preview needed, it's the same element)
    const nameInput = document.getElementById('reviewer-name');
    
    // Date pickers (month and year) - no visual update needed
    
    // Star rating
    const stars = document.querySelectorAll('.review-stars-editable .star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            updateStarRating(rating);
        });

        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.dataset.rating);
            highlightStars(rating, true);
        });
    });

    document.querySelector('.review-stars-editable').addEventListener('mouseleave', function() {
        const currentRating = parseInt(document.getElementById('rating').value);
        highlightStars(currentRating, false);
    });

    // Review text
    const reviewTextarea = document.getElementById('review-text');
    reviewTextarea.addEventListener('input', function(e) {
        // Update character counter
        document.getElementById('char-count').textContent = e.target.value.length;
    });

    // Template buttons
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const template = this.dataset.template;
            reviewTextarea.value = template;
            document.getElementById('char-count').textContent = template.length;
        });
    });

    // Profile picture upload
    document.getElementById('profile-pic').addEventListener('change', handleProfilePicture);

    // Download button
    document.getElementById('download-btn').addEventListener('click', downloadReview);
}

function updateStarRating(rating) {
    document.getElementById('rating').value = rating;
    highlightStars(rating, false);
}

function highlightStars(rating, isHover) {
    const stars = document.querySelectorAll('.review-stars-editable .star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

let cropper = null;

function handleProfilePicture(e) {
    const file = e.target.files[0];
    
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        e.target.value = '';
        return;
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
        alert('Image size must be less than 5MB.');
        e.target.value = '';
        return;
    }

    // Read and show crop modal
    const reader = new FileReader();
    reader.onload = function(event) {
        showCropModal(event.target.result);
    };
    reader.readAsDataURL(file);
}

function showCropModal(imageData) {
    const modal = document.getElementById('crop-modal');
    const cropImage = document.getElementById('crop-image');
    
    // Set image and show modal
    cropImage.src = imageData;
    modal.classList.add('active');
    
    // Destroy existing cropper if any
    if (cropper) {
        cropper.destroy();
    }
    
    // Wait for image to load before initializing cropper
    cropImage.onload = function() {
        // Initialize cropper with strict containment
        cropper = new Cropper(cropImage, {
            aspectRatio: 1,
            viewMode: 3,
            dragMode: 'move',
            autoCropArea: 0.8,
            restore: false,
            guides: true,
            center: true,
            highlight: false,
            cropBoxMovable: true,
            cropBoxResizable: true,
            toggleDragModeOnDblclick: false,
            responsive: true,
            checkOrientation: false,
            background: false,
            modal: true,
            zoomable: true,
            zoomOnWheel: true,
            zoomOnTouch: true,
            scalable: false,
            rotatable: false,
            minContainerWidth: 200,
            minContainerHeight: 200,
        });
    };
}

function closeCropModal() {
    const modal = document.getElementById('crop-modal');
    modal.classList.remove('active');
    
    if (cropper) {
        cropper.destroy();
        cropper = null;
    }
    
    // Reset file input
    document.getElementById('profile-pic').value = '';
}

function applyCrop() {
    if (!cropper) return;
    
    // Get cropped canvas
    const canvas = cropper.getCroppedCanvas({
        width: 200,
        height: 200,
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high',
    });
    
    // Convert to data URL and set as avatar
    const croppedImage = canvas.toDataURL('image/png');
    document.getElementById('preview-avatar').src = croppedImage;
    
    // Close modal
    closeCropModal();
}



function downloadReview() {
    const downloadBtn = document.getElementById('download-btn');
    const reviewCard = document.getElementById('review-card');

    // Temporarily hide elements that shouldn't be in the screenshot
    const charCounter = document.querySelector('.char-counter');
    const avatarLabel = document.querySelector('.avatar-upload-label');
    
    charCounter.style.display = 'none';
    avatarLabel.style.display = 'none';

    // Remove hover effects temporarily
    reviewCard.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.1)';

    // Create a temporary display div for the review text
    const reviewTextarea = document.getElementById('review-text');
    const tempDiv = document.createElement('div');
    tempDiv.className = 'review-content-temp';
    tempDiv.style.cssText = `
        font-size: 1rem;
        line-height: 1.6;
        color: #484848;
        margin-bottom: 15px;
        word-wrap: break-word;
        white-space: pre-wrap;
    `;
    tempDiv.textContent = reviewTextarea.value;
    
    reviewTextarea.style.display = 'none';
    reviewTextarea.parentNode.insertBefore(tempDiv, reviewTextarea);

    // Create temp span for name
    const nameInput = document.getElementById('reviewer-name');
    const tempName = document.createElement('div');
    tempName.className = 'reviewer-name';
    tempName.style.cssText = `
        font-size: 1.2rem;
        font-weight: 600;
        color: #484848;
    `;
    tempName.textContent = nameInput.value;
    nameInput.style.display = 'none';
    nameInput.parentNode.insertBefore(tempName, nameInput);

    // Create temp date display
    const monthSelect = document.getElementById('review-month');
    const yearSelect = document.getElementById('review-year');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    const tempDate = document.createElement('div');
    tempDate.className = 'review-date';
    tempDate.style.cssText = `
        font-size: 0.9rem;
        color: #767676;
        margin-top: 2px;
    `;
    tempDate.textContent = `${monthNames[monthSelect.value]} ${yearSelect.value}`;
    
    const dateWrapper = document.querySelector('.date-picker-wrapper');
    dateWrapper.style.display = 'none';
    dateWrapper.parentNode.appendChild(tempDate);

    // Disable button and show loading state
    downloadBtn.disabled = true;
    downloadBtn.classList.add('loading');
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    downloadBtn.textContent = isMobile ? 'Generating...' : 'Generating...';

    // Use html2canvas to capture the review card
    html2canvas(reviewCard, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true
    }).then(canvas => {
        // Convert canvas to blob
        canvas.toBlob(function(blob) {
            const reviewerName = nameInput.value.trim() || 'Review';
            const timestamp = new Date().getTime();
            const filename = `CouchBnB-Review-${reviewerName}-${timestamp}.png`;

            // Try to use Web Share API on mobile
            if (isMobile && navigator.share && navigator.canShare) {
                const file = new File([blob], filename, { type: 'image/png' });
                
                if (navigator.canShare({ files: [file] })) {
                    navigator.share({
                        files: [file],
                        title: 'CouchBnB Review',
                        text: 'Check out my couch surfing review!'
                    }).then(() => {
                        console.log('Shared successfully');
                        restoreElements();
                        resetButton();
                    }).catch(error => {
                        console.log('Share cancelled or failed:', error);
                        // Fallback to download
                        downloadBlob(blob, filename);
                        restoreElements();
                        resetButton();
                    });
                    return;
                }
            }

            // Default download for desktop or if share is not available
            downloadBlob(blob, filename);
            restoreElements();
            resetButton();

            function downloadBlob(blob, filename) {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.download = filename;
                link.href = url;
                link.click();
                URL.revokeObjectURL(url);
            }

            function restoreElements() {
                charCounter.style.display = '';
                avatarLabel.style.display = '';
                reviewTextarea.style.display = '';
                nameInput.style.display = '';
                dateWrapper.style.display = '';
                tempDiv.remove();
                tempName.remove();
                tempDate.remove();
            }

            function resetButton() {
                setTimeout(() => {
                    downloadBtn.disabled = false;
                    downloadBtn.classList.remove('loading');
                    downloadBtn.textContent = isMobile ? 'Share' : 'Download';
                }, 1000);
            }
        }, 'image/png');
    }).catch(error => {
        console.error('Error generating image:', error);
        alert('Failed to generate image. Please try again.');
        
        // Restore original elements
        charCounter.style.display = '';
        avatarLabel.style.display = '';
        reviewTextarea.style.display = '';
        nameInput.style.display = '';
        dateWrapper.style.display = '';
        tempDiv.remove();
        tempName.remove();
        tempDate.remove();
        
        // Reset button
        downloadBtn.disabled = false;
        downloadBtn.classList.remove('loading');
        downloadBtn.textContent = isMobile ? 'Share' : 'Download';
    });
}

// Prevent form submission if wrapped in a form
document.addEventListener('submit', function(e) {
    e.preventDefault();
    return false;
});
