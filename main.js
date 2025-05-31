
// Language Toggle Functionality
class LanguageToggle {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }

    init() {
        const langToggle = document.getElementById('langToggle');
        const langText = document.getElementById('langText');
        
        if (langToggle && langText) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }

        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Add smooth scrolling for anchor links
        this.addSmoothScrolling();
        
        // Add navbar scroll effect
        this.addNavbarScrollEffect();
        
        // Add intersection observer for animations
        this.addScrollAnimations();
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.setLanguage(this.currentLang);
    }

    setLanguage(lang) {
        const elements = document.querySelectorAll('[data-en][data-ar]');
        const langText = document.getElementById('langText');
        const html = document.documentElement;
        
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });

        // Update language toggle button text
        if (langText) {
            langText.textContent = lang === 'en' ? 'العربية' : 'English';
        }

        // Set HTML lang and dir attributes
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update document title
        document.title = lang === 'en' 
            ? 'Ahmed Haitham - Personal Coach & Author'
            : 'أحمد هيثم - مدرب شخصي ومؤلف';

        console.log(`Language switched to: ${lang}`);
    }

    addSmoothScrolling() {
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

    addNavbarScrollEffect() {
        const navbar = document.querySelector('.navbar');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe coaching cards
        document.querySelectorAll('.coaching-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }
}

// Interactive Features
class InteractiveFeatures {
    constructor() {
        this.init();
    }

    init() {
        this.addButtonClickEffects();
        this.addCardHoverEffects();
        this.addParallaxEffect();
        this.addTypingEffect();
    }

    addButtonClickEffects() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple styles
        const style = document.createElement('style');
        style.textContent = `
            .btn {
                position: relative;
                overflow: hidden;
            }
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    addCardHoverEffects() {
        document.querySelectorAll('.coaching-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // addParallaxEffect() {
    //     const profileSection = document.querySelector('.profile-section');
        
    //     window.addEventListener('scroll', () => {
    //         const scrolled = window.pageYOffset;
    //         const parallaxSpeed = 0.5;
            
    //         if (profileSection) {
    //             profileSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    //         }
    //     });
    // }

    addTypingEffect() {
        const profileText = document.querySelector('.profile-section .lead');
        if (profileText) {
            const originalText = profileText.textContent;
            profileText.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    profileText.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            // Start typing effect after a delay
            setTimeout(typeWriter, 1000);
        }
    }
}

// WhatsApp Integration
class WhatsAppIntegration {
    constructor() {
        this.init();
    }

    init() {
        this.addWhatsAppClickHandler();
    }

    addWhatsAppClickHandler() {
        document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
            link.addEventListener('click', function(e) {
                console.log('WhatsApp link clicked');
                
                // Add a subtle animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }
}

// Form Validation and Feedback
class FormHandler {
    constructor() {
        this.init();
    }

    init() {
        this.addBookingClickHandler();
        this.addBuyNowHandler();
    }

    addBookingClickHandler() {
        document.querySelectorAll('a[href*="calendly.com"]').forEach(link => {
            link.addEventListener('click', function(e) {
                console.log('Booking session clicked');
                
                // Show a toast notification
                this.showToast('Redirecting to booking page...', 'info');
            });
        });
    }

    addBuyNowHandler() {
        document.querySelectorAll('.book-section .btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Buy Now clicked');
                
                // Show purchase options
                this.showPurchaseModal();
            });
        });
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `alert alert-${type} position-fixed`;
        toast.style.cssText = `
            top: 100px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            animation: slideInRight 0.3s ease;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    showPurchaseModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Purchase Book</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <p>Choose your preferred payment method:</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary">Pay with PayPal (15 USD)</button>
                            <button class="btn btn-success">Pay Locally (200 EGP)</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
        
        modal.addEventListener('hidden.bs.modal', () => {
            modal.remove();
        });
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease';
                    
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                    
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    preloadCriticalResources() {
        const criticalImages = [
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Ahmed Haitham Website Loaded');
    
    // Initialize all components
    new LanguageToggle();
    new InteractiveFeatures();
    new WhatsAppIntegration();
    new FormHandler();
    new PerformanceOptimizer();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add error handling
window.addEventListener('error', (e) => {
    console.error('Website Error:', e.error);
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageToggle,
        InteractiveFeatures,
        WhatsAppIntegration,
        FormHandler,
        PerformanceOptimizer
    };
}