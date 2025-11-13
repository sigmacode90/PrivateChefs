   const discountBtn = document.getElementById('discountBtn');
    const popup = document.getElementById('videoPopup');
    const closeBtn = document.querySelector('.close');
    const video = document.getElementById('youtubeVideo');

    // Replace this with your promo or ad video
    const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

    // When the user clicks the button
    discountBtn.addEventListener('click', () => {
      video.src = videoURL;
      popup.style.display = 'flex';
    });

    // When the user closes the popup
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      video.src = ""; // Stop video
    });

    // Close when clicking outside the popup
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
        video.src = "";
      }
    });
