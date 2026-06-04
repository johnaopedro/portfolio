// Update copyright year dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll('.reveal, .glass-card, .section-title');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Trigger point

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
            
            // If it's not already having a reveal class, add a nice transform manually
            if (!reveals[i].classList.contains('reveal')) {
                reveals[i].style.opacity = '1';
                reveals[i].style.transform = 'translateY(0)';
            }
        }
    }
}

// Initial setup for elements that should animate on scroll
document.addEventListener('DOMContentLoaded', () => {
    var animElements = document.querySelectorAll('.glass-card, .section-title');
    animElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s ease';
    });
    
    // Trigger once on load
    reveal();
});

window.addEventListener('scroll', reveal);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            // Adjust for fixed header height
            const headerHeight = document.querySelector('.glass-header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Copy email to clipboard on click
const emailBtn = document.getElementById('email-btn');
if (emailBtn) {
    emailBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = 'johnaopedro@gmail.com';
        
        // Try to copy to clipboard
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(email).then(() => {
                emailBtn.textContent = 'Copiado!';
                setTimeout(() => {
                    emailBtn.textContent = 'Email';
                }, 2000);
            }).catch(() => {
                window.location.href = 'mailto:' + email;
            });
        } else {
            // Fallback for non-secure contexts or old browsers
            const textArea = document.createElement("textarea");
            textArea.value = email;
            textArea.style.position = "fixed"; // Evitar rolar a tela
            textArea.style.opacity = "0";      // Esconder
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                emailBtn.textContent = 'Copiado!';
                setTimeout(() => {
                    emailBtn.textContent = 'Email';
                }, 2000);
            } catch (err) {
                // If everything fails, just try the mailto link
                window.location.href = 'mailto:' + email;
            }
            document.body.removeChild(textArea);
        }
    });
}
