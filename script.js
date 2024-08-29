
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






//Define the function
//function saleTotal (item1, item2, item3) {
  //  return item1+ item2 +item3
//}
//Call the function saleTotal
//console.logsaleTotal(2.99, 5.90, 3.50))
