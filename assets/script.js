document.addEventListener('DOMContentLoaded', (event) => {
    const projects = document.querySelectorAll('.project');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    projects.forEach(project => {
        project.style.opacity = 0;
        project.style.transform = 'translateY(20px)';
        project.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(project);
    });

    const projectsDescription = document.querySelectorAll('.project-description');
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    projectsDescription.forEach(description => {
        projectObserver.observe(description);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to project images
    projects.forEach(project => {
        const img = project.querySelector('img');
        project.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = project.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            img.style.transform = `scale(1.1) rotate(${x * 5}deg) translateX(${x * 10}px) translateY(${y * 10}px)`;
        });
        project.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1) rotate(0deg) translateX(0) translateY(0)';
        });
    });

    // Add particle effect to header
    const header = document.querySelector('header');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.cssText = `
            position: absolute;
            width: 5px;
            height: 5px;
            background-color: rgba(187, 134, 252, 0.5);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 5}s ease-in-out infinite;
        `;
        header.appendChild(particle);
    }

    // Animate skill charts
    const skillCharts = document.querySelectorAll('.skill-chart');
    skillCharts.forEach(chart => {
        const progress = chart.querySelector('.progress');
        const percentage = chart.querySelector('.percentage');
        const value = parseInt(percentage.textContent);
        
        progress.style.strokeDasharray = '0, 100';
        
        setTimeout(() => {
            progress.style.transition = 'stroke-dasharray 1.5s ease-in-out';
            progress.style.strokeDasharray = `${value}, 100`;
        }, 500);
    });

    // Add jumping animation to title letters
    const title = document.querySelector('header h1');
    const letters = title.textContent.split('');
    title.textContent = '';
    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.setProperty('--i', index);
        title.appendChild(span);
    });
});
function createStars() {
    const container = document.getElementById('stars-container');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(star);
    }
}
createStars();
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});