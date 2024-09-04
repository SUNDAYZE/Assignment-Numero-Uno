
document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image-container");
    const images = document.querySelectorAll(".hero");
    


    // Function to adjust the Flexbox layout based on the screen width
    function adjustLayout() {
        if (window.innerWidth < 600) {
            imageContainer.style.flexDirection = "column"; // Stack images vertically on small screens
        } else {
            imageContainer.style.flexDirection = "row"; // Arrange images horizontally on larger screens
        }
    }

    // Adjust layout on page load and when the window is resized
    adjustLayout();
    window.addEventListener("resize", adjustLayout);

    // Add click event to each image for additional interactivity
    images.forEach(image => {
        image.addEventListener("click", function() {
            alert(`You clicked on ${image.alt}`);
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('image-container');
    const heroImage = document.querySelector('.hero');

    // Check if elements are in view and apply fade-in
    function fadeInOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }

    // Set up the Intersection Observer
    const observerOptions = {
        threshold: 0.1 // 10% of the element is visible
    };
    
    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

    // Observe the elements
    observer.observe(imageContainer);
    observer.observe(heroImage);
});

document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('image-container');
    const chefImage = document.querySelector('.chef');

    // Check if elements are in view and apply fade-in
    function fadeInOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }

    // Set up the Intersection Observer
    const observerOptions = {
        threshold: 0.1 // 10% of the element is visible
    };
    
    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

    // Observe the elements
    observer.observe(imageContainer);
    observer.observe(chefImage);
});


document.addEventListener("DOMContentLoaded", function() {
    const elementsToFade = document.querySelectorAll('.modern2, #image-container, .hero');

    // Function to add the fade-in class when elements are in view
    function fadeInOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }

    // Intersection Observer setup
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

    // Observe each element
    elementsToFade.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const elementsToFade = document.querySelectorAll('.info, #image-container, .hero');

    // Function to add the fade-in class when elements are in view
    function fadeInOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }

    // Intersection Observer setup
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

    // Observe each element
    elementsToFade.forEach(element => {
        observer.observe(element);
    });
});