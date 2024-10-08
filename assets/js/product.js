//---------------------------- JS FOR PRODUCT-ZOOM ------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("main-product-img");
    const smallImages = document.querySelectorAll(".single-product-img-small img");
    const left = document.querySelector(".xzoom-container.left");
    const right = document.querySelector(".right");
    const inner = right.querySelector(".inner");
    const rightImage = inner.querySelector("img");

    // Change main and zoomed image on small image click
    smallImages.forEach(image => {
        image.addEventListener("click", function () {
            mainImage.src = this.src;
            rightImage.src = this.src; // Set the zoomed image source
        });
    });

    // Show zoom on mouse move
    left.addEventListener("mousemove", function (e) {
        right.style.display = "block"; // Show the right-side zoomed image
        let { width, height } = this.getBoundingClientRect();
        let xAxis = e.offsetX / width * 100;
        let yAxis = e.offsetY / height * 100;
        
        // Update the transform property for the zoom effect
        inner.style.transform = `translate(-${xAxis}%, -${yAxis}%)`;
        
        // Adjust the zoom image size and position
        rightImage.style.width = `${width * 2}px`; // Optional: Zoom level
        rightImage.style.height = `${height * 2}px`; // Optional: Zoom level
        rightImage.style.objectPosition = `${xAxis}% ${yAxis}%`; // Positioning the zoom
    });

    // Hide the zoom image on mouse leave
    left.addEventListener("mouseleave", function () {
        right.style.display = "none"; // Hide the right-side zoomed image
    });
});


//---------------------------- JS FOR PRODUCT-CHANGE ------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
    const smallImages = document.querySelectorAll(".single-product-img-small img");
    const mainImage = document.getElementById("main-product-img");

    smallImages.forEach(image => {
        image.addEventListener("click", function () {
            mainImage.src = this.src;
            mainImage.setAttribute("xoriginal", this.src);
        });
    });
});
