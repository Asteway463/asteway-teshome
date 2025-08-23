document.addEventListener('DOMContentLoaded', () => {

    // ----------------------
    // Skill Bar Animation
    // ----------------------
    const skillsSection = document.getElementById('skills');
    const skillLevels = document.querySelectorAll('.skill-level');
    let skillsAnimated = false;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                animateSkills();
                skillsAnimated = true;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateSkills = () => {
        skillLevels.forEach(skill => {
            const percent = skill.dataset.percent;
            skill.style.width = percent + '%';
        });
    };

    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // ----------------------
    // Typing Animation
    // ----------------------
    const typingElement = document.querySelector('.typing');
    const roles = ['Frontend Developer', 'UI/UX Designer', 'Web Developer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        const currentText = currentRole.substring(0, charIndex);
        typingElement.textContent = currentText;

        if (!isDeleting && charIndex < currentRole.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = !isDeleting;
            roleIndex = !isDeleting ? (roleIndex + 1) % roles.length : roleIndex;
            setTimeout(type, 1000);
        }
    }
    type();

    // ----------------------
    // Page Click Animation
    // ----------------------
    document.body.addEventListener('click', (event) => {
        const clickEffect = document.createElement('div');
        clickEffect.classList.add('click-effect');
        clickEffect.style.left = event.clientX + 'px';
        clickEffect.style.top = event.clientY + 'px';
        document.body.appendChild(clickEffect);

        setTimeout(() => {
            clickEffect.remove();
        }, 500);
    });

});