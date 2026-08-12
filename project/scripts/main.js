const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

const portfolioGrid = document.querySelector("#portfolio-grid");
const filterButtons = document.querySelectorAll(".filter-button");

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");


/* ==============================
   MOBILE NAVIGATION
================================= */

function setupNavigation() {

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* ==============================
   PORTFOLIO DATA
================================= */

const projects = [

    /* PHOTOGRAPHY */

    {
        title: "HeadShot",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-01.jpg",
        alt: "Professional headshot portrait photographed by Isadora Paula"
    },

    {
        title: "HeadShot",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-02.jpg",
        alt: "Headshot portrait session photographed by Isadora Paula"
    },

    {
        title: "Growing Together",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-04.jpg",
        alt: "Portrait photography capturing a family connection by Isadora Paula"
    },

    {
        title: "Growing Together",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-05.jpg",
        alt: "Family portrait captured by Isadora Paula"
    },

    {
        title: "Before We Meet",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-06.jpg",
        alt: "Couple portrait photographed before their wedding by Isadora Paula"
    },

    {
        title: "Before We Meet",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-07.jpg",
        alt: "Engagement photography session captured by Isadora Paula"
    },

    {
        title: "A Year to Remember",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-08.jpg",
        alt: "Celebration moment captured by Isadora Paula"
    },

    {
        title: "A Year to Remember",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-09.jpg",
        alt: "Special event photography by Isadora Paula"
    },

    {
        title: "The Beginning of Forever",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-10.jpg",
        alt: "Wedding portrait photographed by Isadora Paula"
    },

    {
        title: "A Promise Made",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-11.jpg",
        alt: "Wedding photography capturing a meaningful couple moment by Isadora Paula"
    },


    /* FILMMAKING */

    {
        title: "The Moment We Found Out",
        category: "filmmaking",
        categoryName: "Filmmaking",
        description: "Visual storytelling by Isadora Paula.",
        image: "images/portfolio/filmmaking-01.jpg",
        videoUrl: "https://photos.app.goo.gl/1gSRTXeEsYoYc9hU9",
        alt: "Video still capturing a pregnancy announcement moment filmed by Isadora Paula"
    },

    {
        title: "A Brand in Motion",
        category: "filmmaking",
        categoryName: "Filmmaking",
        description: "Visual storytelling by Isadora Paula.",
        image: "images/portfolio/filmmaking-02.jpg",
        videoUrl: "https://photos.app.goo.gl/kKqYqyVypW7AKZZ9A",
        alt: "Video still from a promotional brand film created by Isadora Paula"
    },

    {
        title: "Before the 'I Do'",
        category: "filmmaking",
        categoryName: "Filmmaking",
        description: "Visual storytelling by Isadora Paula.",
        image: "images/portfolio/filmmaking-03.jpg",
        videoUrl: "https://photos.app.goo.gl/vNhhq2EL62Z7ZdyR9",
        alt: "Video still from a wedding film created by Isadora Paula"
    },

    /* DESIGN */

    {
        title: "School Communications",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-01.jpg",
        alt: "School graphic design created for educational communication"
    },

    {
        title: "School Communications",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-02.jpg",
        alt: "School promotional graphic created for an educational activity"
    },

    {
        title: "School Communications",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-03.jpg",
        alt: "School graphic design created for a commemorative date"
    },

    {
        title: "School Communications",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-04.jpg",
        alt: "Educational event graphic designed for school communication"
    },

    {
        title: "School Journal",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-06.jpg",
        alt: "School newsletter cover designed for institutional communication"
    },

    {
        title: "School Journal",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-07.jpg",
        alt: "Editorial page from a school newsletter designed by Isadora Paula"
    },

    {
        title: "A Brand in Focus",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-08.jpg",
        alt: "Promotional graphic design created for product advertising"
    },

    {
        title: "A Brand in Focus",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-09.jpg",
        alt: "Product promotion graphic designed for a retail brand"
    },

    {
        title: "An Invitation to Forever",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-10.jpg",
        alt: "Wedding invitation design created for a special celebration"
    }

];


/* ==============================
DISPLAY PORTFOLIO
================================= */

function displayProjects(projectList) {

    if (!portfolioGrid) {
        return;
    }

    portfolioGrid.innerHTML = "";

    if (projectList.length === 0) {

        portfolioGrid.innerHTML = `
            <p class="form-message">
                No projects found in this category.
            </p>
        `;

        return;
    }

    projectList.forEach((project) => {

        const projectCard = document.createElement("article");

        projectCard.classList.add("project-card");

        /*
        Se o projeto tiver um videoUrl,
        a imagem será clicável e abrirá o vídeo.
        */

        const imageContent = project.videoUrl
            ? `
                <a
                    class="project-video"
                    href="${project.videoUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch ${project.title}"
                >
                    <img
                        class="project-image"
                        src="${project.image}"
                        alt="${project.title}"
                        loading="lazy"
                    >

                    <span class="video-label">
                        ▶ Watch film
                    </span>
                </a>
            `
            : `
                <img
                    class="project-image"
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy"
                >
            `;

        projectCard.innerHTML = `

            ${imageContent}

            <div class="project-content">

                <p class="project-category">
                    ${project.categoryName}
                </p>

                <h3>${project.title}</h3>

                <p>${project.description}</p>

            </div>

        `;

        portfolioGrid.appendChild(projectCard);

    });

}


/* ==============================
   PORTFOLIO FILTER
================================= */

function setupPortfolioFilters() {

    if (!portfolioGrid || filterButtons.length === 0) {
        return;
    }


    displayProjects(projects);


    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedCategory = button.dataset.filter;


            filterButtons.forEach((filterButton) => {

                filterButton.classList.remove("active");

            });


            button.classList.add("active");


            let filteredProjects;


            if (selectedCategory === "all") {

                filteredProjects = projects;

            } else {

                filteredProjects = projects.filter(
                    (project) => project.category === selectedCategory
                );

            }


            displayProjects(filteredProjects);


            localStorage.setItem(
                "selectedPortfolioCategory",
                selectedCategory
            );

        });

    });


    const savedCategory = localStorage.getItem(
        "selectedPortfolioCategory"
    );


    if (savedCategory) {

        const savedButton = document.querySelector(
            `.filter-button[data-filter="${savedCategory}"]`
        );


        if (savedButton) {

            savedButton.click();

        }

    }

}


/* ==============================
   CONTACT FORM
================================= */

function setupContactForm() {

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", (event) => {

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const service = document.querySelector("#service");
        const message = document.querySelector("#message");

        let isValid = true;

        // Remove mensagens/classes anteriores
        [name, email, service, message].forEach((field) => {
            field.classList.remove("input-error");
        });

        if (!name.value.trim()) {
            name.classList.add("input-error");
            isValid = false;
        }

        if (!email.value.trim()) {
            email.classList.add("input-error");
            isValid = false;
        }

        if (!service.value) {
            service.classList.add("input-error");
            isValid = false;
        }

        if (!message.value.trim()) {
            message.classList.add("input-error");
            isValid = false;
        }

        if (!isValid) {

            event.preventDefault();

            if (formMessage) {
                formMessage.textContent =
                    "Please complete all fields before sending.";
            }

            return;
        }

        if (formMessage) {
            formMessage.textContent =
                "Sending your message...";
        }

    });
}


/* ==============================
   INITIALIZE WEBSITE
================================= */

function initializeWebsite() {

    setupNavigation();

    setupPortfolioFilters();

    setupContactForm();

}


initializeWebsite();