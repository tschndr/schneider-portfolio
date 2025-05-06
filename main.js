// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
        
// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
        
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    menuToggle.innerHTML = isOpen ? 
        '<i class="fa-solid fa-xmark"></i>' : 
        '<i class="fa-solid fa-bars"></i>';
});
        
// Close menu when clicking a link on mobile
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
});
        
// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            const categories = item.getAttribute('data-category').split(' ');

            if (filter === 'all' || categories.includes(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


// Gallery Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryFeaturedItems = document.querySelectorAll('.gallery-featured-item');
    const galleryIndicators = document.querySelectorAll('.gallery-indicator');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    
    let currentIndex = 0;
    const totalItems = galleryFeaturedItems.length;
    
    // Function to update the active slide
    function updateGallery(index) {
        // Remove active class from all items
        galleryFeaturedItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Remove active class from all indicators
        galleryIndicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Add active class to current item and indicator
        galleryFeaturedItems[index].classList.add('active');
        galleryIndicators[index].classList.add('active');
        
        // Update current index
        currentIndex = index;
    }
    
    // Next button click
    nextBtn.addEventListener('click', () => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= totalItems) {
            nextIndex = 0;
        }
        updateGallery(nextIndex);
    });
    
    // Previous button click
    prevBtn.addEventListener('click', () => {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = totalItems - 1;
        }
        updateGallery(prevIndex);
    });
    
    // Indicator click events
    galleryIndicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.getAttribute('data-index'));
            updateGallery(index);
        });
    });
    
    // Auto slide (optional)
    let galleryInterval = setInterval(() => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= totalItems) {
            nextIndex = 0;
        }
        updateGallery(nextIndex);
    }, 15000);
    
    // Pause auto slide on hover
    const galleryFeatured = document.querySelector('.gallery-featured');
    
    galleryFeatured.addEventListener('mouseenter', () => {
        clearInterval(galleryInterval);
    });
    
    galleryFeatured.addEventListener('mouseleave', () => {
        galleryInterval = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= totalItems) {
                nextIndex = 0;
            }
            updateGallery(nextIndex);
        }, 6000);
    });
    
    // Gallery item hover effect enhancement
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            galleryItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.opacity = '0.6';
                }
            });
        });
        
        item.addEventListener('mouseleave', () => {
            galleryItems.forEach(otherItem => {
                otherItem.style.opacity = '1';
            });
        });
    });
});
        
// Scroll animation for fade-up elements
const fadeElements = document.querySelectorAll('.fade-up');
        
const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
                
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};
        
// Run on load and scroll
window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);
        
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
                
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
                
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('video-container').addEventListener('click', function () {
    this.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/watch?v=-f3LIOsxw70" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  });

document.getElementById('video-container-1').addEventListener('click', function () {
    this.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/watch?v=CzFzhmQb2NA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  });