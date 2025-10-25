// event date here (Year, Month-1, Day, Hour, Minute, Second)
        const eventDate = new Date('2026-10-26T00:00:00').getTime();
        
        // For testing purposes, set a closer date:
        // const eventDate = new Date(Date.now() + 60000).getTime(); // 1 minute from now

        let countdownTimer;
        let isEventDay = false;
        let isRegistered = false;

        // Initialize the website
        function init() {
            checkEventStatus();
            createParticles();
            loadUserData();
        }

        // Check if it's event day
        function checkEventStatus() {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance <= 0) {
                // Event day has arrived
                isEventDay = true;
                showRegistrationSection();
            } else {
                // Still counting down
                startCountdown();
                showCountdownSection();
            }
        }

        // Start countdown timer
        function startCountdown() {
            countdownTimer = setInterval(function() {
                const now = new Date().getTime();
                const distance = eventDate - now;

                if (distance <= 0) {
                    clearInterval(countdownTimer);
                    isEventDay = true;
                    showRegistrationSection();
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById('days').textContent = String(days).padStart(2, '0');
                document.getElementById('hours').textContent = String(hours).padStart(2, '0');
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
                document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            }, 1000);
        }

        // Show different sections
        function showCountdownSection() {
            document.getElementById('countdown-section').classList.remove('hidden');
            document.getElementById('registration-section').classList.add('hidden');
            document.getElementById('access-section').classList.add('hidden');
        }

        function showRegistrationSection() {
            document.getElementById('countdown-section').classList.add('hidden');
            document.getElementById('registration-section').classList.remove('hidden');
            document.getElementById('access-section').classList.add('hidden');
        }

        function showAccessSection() {
            document.getElementById('countdown-section').classList.add('hidden');
            document.getElementById('registration-section').classList.add('hidden');
            document.getElementById('access-section').classList.remove('hidden');
        }

        // Handle registration form submission
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                registrationTime: new Date().toISOString()
            };

            // Validate form data
            if (!formData.fullName || !formData.email || !formData.phone) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            if (!isValidEmail(formData.email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Save user data (in a real app, this would be sent to a server)
            saveUserData(formData);
            isRegistered = true;
            
            // Show success notification
            showNotification('Registration successful! Welcome aboard!', 'success');
            
            // Show access section
            document.getElementById('userName').textContent = formData.fullName.split(' ')[0];
            setTimeout(() => {
                showAccessSection();
            }, 1500);
        });

        // Utility functions
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function saveUserData(data) {
            const userData = JSON.stringify(data);
            // In a real application, you would send this to your server
            // For demo purposes, we'll use a variable (since localStorage is not available)
            window.currentUser = data;
        }

        function loadUserData() {
            // In a real application, you would check if user is already registered
            // For demo purposes, we'll check a variable
            if (window.currentUser) {
                isRegistered = true;
                if (isEventDay) {
                    document.getElementById('userName').textContent = window.currentUser.fullName.split(' ')[0];
                    showAccessSection();
                }
            }
        }

        function logout() {
            window.currentUser = null;
            isRegistered = false;
            showRegistrationSection();
            showNotification('Logged out successfully', 'success');
        }

        // Department access functions
        function accessFashionDept() {
            showNotification('Redirecting to Fashion Department...', 'success');
            // In a real app, redirect to fashion e-commerce site
            setTimeout(() => {
                window.open('https://example-fashion-store.com', '_blank');
            }, 1000);
        }

        function accessMediaDept() {
            showNotification('Redirecting to Media Department...', 'success');
            // In a real app, redirect to media platform
            setTimeout(() => {
                window.open('https://example-media-platform.com', '_blank');
            }, 1000);
        }

        // Notification system
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = `notification ${type}`;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 20;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.width = Math.random() * 6 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize the website when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);

        // Handle window resize for responsive particles
        window.addEventListener('resize', function() {
            // Recreate particles on resize for better distribution
            const particlesContainer = document.getElementById('particles');
            particlesContainer.innerHTML = '';
            createParticles();
        });

// --- navigation helper appended below ---


function navigateTo(url) {
  document.body.classList.add('fade-out');
  setTimeout(() => { window.location.href = url; }, 300);
}
try {
  window.accessFashionDept = function(){ navigateTo('assets/pages/fashion.html'); };
  window.accessMediaDept = function(){ navigateTo('assets/pages/media.html'); };
} catch(e) {
  function accessFashionDept(){ navigateTo('assets/pages/fashion.html'); }
  function accessMediaDept(){ navigateTo('assets/pages/media.html'); }
}
