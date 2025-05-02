document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.querySelector('.animated-text');
    
    // Add the visible class after a short delay
    setTimeout(() => {
        animatedText.classList.add('visible');
    }, 100);
});


function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}
