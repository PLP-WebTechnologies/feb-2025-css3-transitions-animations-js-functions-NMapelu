// Button click event to trigger animation and store preference
const animateButton = document.getElementById('animateButton');
const storedAnimationState = localStorage.getItem('buttonAnimationState');

// Check stored state to apply animation
if (storedAnimationState === 'true') {
    animateButton.classList.add('animate');
}

// Trigger animation on click and store preference
animateButton.addEventListener('click', () => {
    animateButton.classList.add('animate');
    
    // Store the state in localStorage to persist the animation preference
    localStorage.setItem('buttonAnimationState', 'true');
    
    // Remove animation class after animation ends (reset state)
    animateButton.addEventListener('animationend', () => {
        animateButton.classList.remove('animate');
    });
});

// Form validation (simple example)
const userForm = document.getElementById('userForm');
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');

emailInput.addEventListener('input', () => {
    if (!emailInput.validity.valid) {
        emailFeedback.textContent = "Please enter a valid email.";
    } else {
        emailFeedback.textContent = "";
    }
});
