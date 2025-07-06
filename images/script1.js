// Get elements
const loginBtn = document.getElementById('openLoginBtn');
const loginModal = document.getElementById('loginModal');
const closeLoginBtn = document.getElementById('closeLoginBtn');

// Open Login Modal
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

// Close Login Modal
closeLoginBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Close Modal When Clicking Outside of Content
window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});
