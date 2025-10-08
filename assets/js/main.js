class PortfolioApp {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.initializeComponents();
        this.setupScrollAnimations();
    }
    
    setupEventListeners() {
        // Smooth scrolling for navigation
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                this.smoothScroll(link.getAttribute('href'));
            }
        });
        
        // Handle CV download tracking
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-primary') || e.target.closest('[download]')) {
                this.trackDownload('CV');
            }
        });
        
        // Handle external link tracking
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[target="_blank"]');
            if (link) {
                this.trackExternalLink(link.href);
            }
        });
    }
    
    initializeComponents() {
        // Add loaded class when page is fully loaded
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            this.initializePageSpecificFeatures();
        });
        
        // Handle page transitions
        this.setupPageTransitions();
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
                    
                    // Add sequential animation delay for multiple elements
                    if (entry.target.classList.contains('nav-card')) {
                        const cards = document.querySelectorAll('.nav-card');
                        const index = Array.from(cards).indexOf(entry.target);
                        entry.target.style.animationDelay = `${index * 0.1}s`;
                    }
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.slide-in');
        animatedElements.forEach(el => observer.observe(el));
    }
    
    smoothScroll(targetId) {
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    setupPageTransitions() {
        // Add loading state for page transitions
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (link && link.href && !link.target && !link.download) {
                const isInternal = link.href.startsWith(window.location.origin);
                if (isInternal) {
                    e.preventDefault();
                    this.navigateToPage(link.href);
                }
            }
        });
    }
    
    navigateToPage(url) {
        // Add page transition animation
        document.body.style.opacity = '0.7';
        document.body.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }
    
    initializePageSpecificFeatures() {
        const body = document.body;
        
        if (body.classList.contains('page-home')) {
            this.initializeHomepageFeatures();
        } else if (body.classList.contains('page-developer')) {
            this.initializeDeveloperFeatures();
        } else if (body.classList.contains('page-scout')) {
            this.initializeScoutFeatures();
        } else if (body.classList.contains('page-builder')) {
            this.initializeBuilderFeatures();
        }
    }
    
    initializeHomepageFeatures() {
        console.log('Initializing homepage features');
        // Add any homepage-specific initialization here
    }
    
    initializeDeveloperFeatures() {
        console.log('Initializing developer page features');
        // Will be implemented in Phase 2
    }
    
    initializeScoutFeatures() {
        console.log('Initializing scout page features');
        // Will be implemented in Phase 2
    }
    
    initializeBuilderFeatures() {
        console.log('Initializing builder page features');
        // Will be implemented in Phase 2
    }
    
    trackDownload(type) {
        console.log(`${type} download initiated`);
        // You can integrate with analytics here
        // Example: gtag('event', 'download', { file_type: type });
    }
    
    trackExternalLink(url) {
        console.log(`External link clicked: ${url}`);
        // You can integrate with analytics here
        // Example: gtag('event', 'external_click', { destination: url });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
    
    // Initialize any third-party scripts
    if (typeof gtag !== 'undefined') {
        gtag('config', 'YOUR_GA_ID');
    }
});