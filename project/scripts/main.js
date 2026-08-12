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
        image: "images/portfolio/photography-01.jpg"
    },

    {
        title: "HeadShot",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-02.jpg"
    },

    {
        title: "HeadShot",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-03.jpg"
    },

    {
        title: "Growing Together",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-04.jpg"
    },

    {
        title: "Growing Together",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-05.jpg"
    },

    {
        title: "Before We Meet",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-06.jpg"
    },

    {
        title: "Before We Meet",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-07.jpg"
    },

    {
        title: "A Year to Remember",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-08.jpg"
    },

    {
        title: "A Year to Remember",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-09.jpg"
    },

    {
        title: "The Beginning of Forever",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-10.jpg"
    },

    {
        title: "A Promise Made",
        category: "photography",
        categoryName: "Photography",
        description: "Photography by Isadora Paula.",
        image: "images/portfolio/photography-11.jpg"
    },


    /* FILMMAKING */

    {
        title: "The Moment We Found Out",
        category: "filmmaking",
        categoryName: "Filmmaking",
        description: "Visual storytelling by Isadora Paula.",
        image: "images/portfolio/filmmaking-01.jpg",
        videoUrl: "https://photos.app.goo.gl/1gSRTXeEsYoYc9hU9"
    },

    {
        title: "A Brand in Motion",
        category: "filmmaking",
        categoryName: "Filmmaking",
        description: "Visual storytelling by Isadora Paula.",
        image: "images/portfolio/filmmaking-02.jpg",
        videoUrl: "https://photos.app.goo.gl/kKqYqyVypW7AKZZ9A"
    },

    {
        title: "Before the 'I Do'",
        category: "filmmaking",
        categoryName: "Filmmaking",
        description: "Visual storytelling by Isadora Paula.",
        image: "images/portfolio/filmmaking-03.jpg",
        videoUrl: "https://photos.app.goo.gl/vNhhq2EL62Z7ZdyR9"
    },

    /* DESIGN */

    {
        title: "Design 01",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-01.jpg"
    },

    {
        title: "Design 02",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-02.jpg"
    },

    {
        title: "Design 03",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-03.jpg"
    },

    {
        title: "Design 04",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-04.jpg"
    },

    {
        title: "Design 05",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-05.jpg"
    },

    {
        title: "Design 06",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-06.jpg"
    },

    {
        title: "Design 07",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-07.jpg"
    },

    {
        title: "Design 08",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-08.jpg"
    },

    {
        title: "Design 09",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-09.jpg"
    },

    {
        title: "Design 10",
        category: "design",
        categoryName: "Graphic Design",
        description: "Graphic design by Isadora Paula.",
        image: "images/portfolio/design-10.jpg"
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


    contactForm.addEventListener("submit", () => {

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