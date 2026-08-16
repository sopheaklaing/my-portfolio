const projects = [
    {
        name: "ITE Store",
        description: "An e-commerce mobile application for browsing products, managing a shopping cart, and placing orders.",
        technologies: ["Flutter", "Laravel", "PostgreSQL"],
        link: "#"
    },
    {
        name: "Smart LMS",
        description: "A learning management system that provides courses, user management, and learning features.",
        technologies: ["Next.js", "Laravel", "Node.js", "PostgreSQL"],
        link: "#"
    },
    {
        name: "Personal Portfolio",
        description: "A personal portfolio website showcasing my skills, projects, education, and experience.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "#"
    }
];

function renderProjects(){
    const container = document.querySelector(".projects-container");
    if (!container) return ;

    container.innerHTML = projects.map(project => `
         <div class="project-card">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
            <a href="${project.link}" class="project-link">View Project</a>
        </div>
        `).join("");
    observeCards();
    
}

function observeCards() {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", renderProjects);