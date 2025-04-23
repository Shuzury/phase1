// verification.js - Alien verification script
import { DotLottie } from 'https://esm.sh/@lottiefiles/dotlottie-web@0.37.0';

let currentTheme = 'Alien';
const canvas = document.querySelector('#display-canvas');
const dotLottie = new DotLottie({
  autoplay: true,
  loop: true,
  canvas: canvas,
  src: 'https://lottie.host/7da7b6c9-401f-436d-968b-c50ba49409b3/V6DoSiPH8g.lottie',
  themeId: currentTheme,
});

// Smooth theme transition
async function transitionTheme(newTheme) {
  canvas.style.opacity = '0';
  await new Promise((resolve) => setTimeout(resolve, 500));
  dotLottie.setTheme(newTheme);
  canvas.style.opacity = '1';
  currentTheme = newTheme;

  // Enable the continue button only if Human theme is selected
  const verifyBtn = document.getElementById('verify-human-btn');
  if (newTheme === 'Human') {
    verifyBtn.disabled = false;
    verifyBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e53)';
  } else {
    verifyBtn.disabled = true;
    verifyBtn.style.background = 'rgba(255, 255, 255, 0.2)';
  }
}

document.getElementById('theme-switch').addEventListener('change', (e) => {
  transitionTheme(e.target.checked ? 'Human' : 'Alien');
});

document.getElementById('captcha-guy').addEventListener('click', () => {
  const switchElement = document.getElementById('theme-switch');
  switchElement.checked = !switchElement.checked;
  transitionTheme(switchElement.checked ? 'Human' : 'Alien');
});

// Add ripple effect to button
document.getElementById('captcha-guy').addEventListener('click', function (e) {
  let ripple = document.createElement('div');
  ripple.style.position = 'absolute';
  ripple.style.width = '50px';
  ripple.style.height = '50px';
  ripple.style.background = 'rgba(255, 255, 255, 0.4)';
  ripple.style.borderRadius = '50%';
  ripple.style.left = e.offsetX + 'px';
  ripple.style.top = e.offsetY + 'px';
  ripple.style.transform = 'translate(-50%, -50%) scale(0)';
  ripple.style.pointerEvents = 'none';
  ripple.style.animation = 'ripple 0.6s linear';

  this.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// Verify button click handler
document.getElementById('verify-human-btn').addEventListener('click', function() {
  // Hide the verification screen
  document.querySelector('.alien-verification-screen').style.opacity = '0';
  
  // After animation, redirect to the birthday page
  setTimeout(() => {
    window.location.href = 'https://shuzury.github.io/phase2/'; // Redirect to the original birthday page
  }, 500);
});

// Add CSS for verification fade-out animation
const style = document.createElement('style');
style.textContent = `
.alien-verification-screen {
  transition: opacity 0.5s ease;
}
`;
document.head.appendChild(style);
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})
