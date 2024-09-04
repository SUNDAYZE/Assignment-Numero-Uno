document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image-container");
    const heroImages = document.querySelectorAll(".hero");
    const chefImages = document.querySelectorAll(".chef");
    const elementsToFade = document.querySelectorAll('.modern2, .info, #image-container, .hero, .chef');
    
    // Adjust layout based on screen width
    function adjustLayout() {
        imageContainer.style.flexDirection = window.innerWidth < 600 ? "column" : "row";
    }

    // Add click event to images
    function addClickEvents(images) {
        images.forEach(image => {
            image.addEventListener("click", function() {
                alert(`You clicked on ${image.alt}`);
            });
        });
    }

    // Function to handle fade-in on scroll using Intersection Observer
    function fadeInOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }

    // Set up the Intersection Observer for fade-in effect
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

    // Observe all elements that need the fade-in effect
    elementsToFade.forEach(element => observer.observe(element));

    // Initial layout adjustment and event listener setup
    adjustLayout();
    window.addEventListener("resize", adjustLayout);

    // Add click events to images
    addClickEvents(heroImages);
    addClickEvents(chefImages);
});