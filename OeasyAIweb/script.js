// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Select all image blocks
const imageBlocks = document.querySelectorAll('.image-block');

// Iterate over each image block and create a ScrollTrigger animation
imageBlocks.forEach((block, index) => {
  gsap.fromTo(block, {
    opacity: 0,
    rotation: 360, // Start the block rotated
    duration: 3,
    y: 100, // Start from 100px below
  }, {
    opacity: 1,
    rotation: 0, // End at 0 rotation (normal position)
    y: 0, // Move to normal position
    scrollTrigger: {
      trigger: block,
      start: "top 80%", // Trigger when 80% of the block is in the viewport
      end: "top 20%",
      toggleActions: "play none none none", // Action to play when entering
      markers: false, // Set to `true` to see the trigger markers for debugging
      scrub: true, // Optional: smooth scrubbing
    },
  });
});
