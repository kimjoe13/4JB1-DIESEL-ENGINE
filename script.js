  photo.classList.remove('loaded');
  photo.classList.add('loading');
  
  setTimeout(() => {
    switch(type) {
      case 'wiring':
        photo.src = imagePaths.wiring;
        photo.alt = 'Detailed wiring diagram of the engine system';
        break;
      case '3d':
        photo.src = imagePaths.threeD;
        photo.alt = '3D rendered design of the engine';
        break;
      case 'actual':
        photo.src = imagePaths.actual;
        photo.alt = 'Actual photos of the engine system from multiple angles';
        break;
      default:
        photo.src = '';
        photo.alt = 'No photo selected';
    }
    
    // When image loads, show it with animation
    photo.onload = function() {
      photo.classList.remove('loading');
      photo.classList.add('loaded');
    };
    
    // If image fails to load
    photo.onerror = function() {
      photo.classList.remove('loading');
      alert('Image failed to load. Please check the filename and path.');
    };
  }, 300);
}
// Add event listeners to buttons
wiringBtn.addEventListener('click', () => showPhoto('wiring'));
threeDBtn.addEventListener('click', () => showPhoto('3d'));
actualBtn.addEventListener('click', () => showPhoto('actual'));
// Optional: Show first image by default when page loads
window.addEventListener('load', () => {
  showPhoto('wiring');
});