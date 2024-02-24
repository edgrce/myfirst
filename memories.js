document.addEventListener('DOMContentLoaded', function () {
    const photoGrid = document.getElementById('photo-grid');
  
    // Replace the following array with your image URLs
    const imageUrls = [
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
      '/memories/01.jpg',
    ];
  
    imageUrls.forEach((imageUrl, index) => {
      const photoContainer = document.createElement('div');
      photoContainer.classList.add('photo');
  
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = `Photo ${index + 1}`;
  
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      const overlayText = document.createElement('p');
      overlayText.innerText = `Photo ${index + 1}`;
      overlay.appendChild(overlayText);
  
      photoContainer.appendChild(img);
      photoContainer.appendChild(overlay);
      photoGrid.appendChild(photoContainer);
    });
  });
  