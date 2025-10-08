class PortfolioAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupPageSpecificAnimations();
        this.setupInitialPageAnimations();
    }

    setupInitialPageAnimations() {
        // Add initial page load animations
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                this.animatePageEntrance();
            }, 100);
        });
    }

    animatePageEntrance() {
        // Slide in main content with staggered timing
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const elements = heroContent.children;
            Array.from(elements).forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = `all 0.8s ease ${index * 0.2}s`;

                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100);
            });
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.slide-in');
        animatedElements.forEach(el => observer.observe(el));
    }

    setupPageSpecificAnimations() {
        const body = document.body;

        if (body.classList.contains('page-developer')) {
            this.setupBinaryRain();
        } else if (body.classList.contains('page-scout')) {
            this.setupFireSparks();
        } else if (body.classList.contains('page-builder')) {
            this.setupDustFog();
        }
    }

    setupBinaryRain() {
        const container = document.getElementById('binaryRain');
        if (!container) return;

        const binaryChars = '01';

        // Create binary drops
        for (let i = 0; i < 20; i++) {
            const drop = document.createElement('div');
            drop.style.position = 'absolute';
            drop.style.left = Math.random() * 100 + '%';
            drop.style.top = '-20px';
            drop.style.color = 'rgba(66, 133, 244, 0.7)';
            drop.style.fontSize = (Math.random() * 12 + 10) + 'px';
            drop.style.fontFamily = 'Courier New, monospace';
            drop.style.fontWeight = 'bold';
            drop.textContent = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
            drop.style.opacity = '0';
            drop.style.zIndex = '1';
            container.appendChild(drop);

            // Animate binary rain
            const duration = 2000 + Math.random() * 2000;
            const delay = Math.random() * 3000;

            drop.animate([
                {
                    top: '-20px',
                    opacity: 0,
                    transform: 'scale(0.8)'
                },
                {
                    top: '20%',
                    opacity: 1,
                    transform: 'scale(1)'
                },
                {
                    top: '100%',
                    opacity: 0,
                    transform: 'scale(0.8)'
                }
            ], {
                duration: duration,
                delay: delay,
                iterations: Infinity,
                easing: 'linear'
            });
        }
    }

    setupFireSparks() {
        const container = document.getElementById('phoenixFire');
        if (!container) return;

        // Create fire sparks
        for (let i = 0; i < 12; i++) {
            const spark = document.createElement('div');
            spark.style.position = 'absolute';
            spark.style.width = '6px';
            spark.style.height = '6px';
            spark.style.background = 'radial-gradient(circle, #ff6b35, #ff4757, #ff3838)';
            spark.style.borderRadius = '50%';
            spark.style.left = '50%';
            spark.style.top = '50%';
            spark.style.opacity = '0';
            spark.style.filter = 'blur(1px)';
            container.appendChild(spark);

            // Animate spark
            const angle = Math.random() * Math.PI * 2;
            const distance = 40 + Math.random() * 50;
            const duration = 1000 + Math.random() * 1000;

            spark.animate([
                {
                    opacity: 0,
                    transform: 'translate(-50%, -50%) scale(0)',
                    offset: 0
                },
                {
                    opacity: 0.8,
                    transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1)`,
                    offset: 0.4
                },
                {
                    opacity: 0,
                    transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance * 1.3}px, ${Math.sin(angle) * distance * 1.3}px) scale(0)`,
                    offset: 1
                }
            ], {
                duration: duration,
                delay: Math.random() * 2000,
                iterations: Infinity,
                easing: 'ease-out'
            });
        }
    }

    setupDustFog() {
        const container = document.getElementById('constructionDust');
        if (!container) return;

        // Create small dust particles
        for (let i = 0; i < 25; i++) {
            const dust = document.createElement('div');
            dust.style.position = 'absolute';
            dust.style.width = (Math.random() * 3 + 1) + 'px'; // Small dots 1-4px
            dust.style.height = dust.style.width;
            dust.style.background = 'rgba(139, 69, 19, 0.6)'; // Brown dust color
            dust.style.borderRadius = '50%';
            dust.style.left = Math.random() * 100 + '%';
            dust.style.top = Math.random() * 100 + '%';
            dust.style.opacity = '0';
            dust.style.zIndex = '1';
            container.appendChild(dust);

            // Animate dust particles floating
            dust.animate([
                {
                    opacity: 0,
                    transform: 'translateY(0px) translateX(0px)'
                },
                {
                    opacity: 0.8,
                    transform: 'translateY(-20px) translateX(10px)'
                },
                {
                    opacity: 0.4,
                    transform: 'translateY(-40px) translateX(-5px)'
                },
                {
                    opacity: 0,
                    transform: 'translateY(-60px) translateX(15px)'
                }
            ], {
                duration: 8000 + Math.random() * 4000,
                delay: Math.random() * 5000,
                iterations: Infinity,
                easing: 'ease-in-out'
            });
        }
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioAnimations();
});
