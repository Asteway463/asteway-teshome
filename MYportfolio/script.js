document.addEventListener('DOMContentLoaded', () => {
    const sparkles = document.querySelectorAll('.animated-sparkle');

    sparkles.forEach(sparkle => {
        // Generate random values for movement within a range
        const randX = Math.random() * 200 - 100; // -100 to 100px
        const randA = Math.random() * 200 - 100; // -100 to 100px
        const randB = Math.random() * 200 - 100; // -100 to 100px
        const randC = Math.random() * 200 - 100; // -100 to 100px

        const randD = Math.random() * 200 - 100; // -100 to 100px
        const randY = Math.random() * 200 - 100; // -100 to 100px


        // Set CSS custom properties
        sparkle.style.setProperty('--rand-x', randX);
        sparkle.style.setProperty('--rand-y', randY);

        // You can also randomize animation duration or delay slightly here if needed
        // sparkle.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5 to 10 seconds
        // sparkle.style.animationDelay = `${Math.random() * 8}s`; // 0 to 8 seconds
    });

    
});