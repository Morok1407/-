const root = document.documentElement;
const eye = document.getElementById('eyeball');
const beam = document.getElementById('beam');
const passwordInput = document.getElementById('password');

root.addEventListener('mousemove', (e) => {
    let rect = beam.getBoundingClientRect();
    let mouseX = e.pageX - rect.left - window.scrollX;
    let mouseY = e.pageY - rect.top - window.scrollY;
    let rad = Math.atan2(mouseY - rect.height / 2, mouseX - rect.width / 2);
    let degrees = (rad * (180 / Math.PI) * -1) + 180;

    root.style.setProperty('--beamDegrees', `${degrees}deg`);
});

eye.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.toggle('show-password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.focus();  
});