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

    {
        title: "Stories Worth Remembering",
        category: "photography",
        categoryName: "Photography",
        description: "A visual story created through intentional photography.",
        image: "images/portfolio1.webp"
    },

    {
        title: "Moments in Motion",
        category: "filmmaking",
        categoryName: "Filmmaking",
        description: "A visual narrative created through video and movement.",
        image: "images/portfolio2.webp"
    },

    {
        title: "Ideas With Identity",
        category: "design",
        categoryName: "Graphic Design",
        description: "A creative design project focused on visual communication.",
        image: "images/portfolio3.webp"
    },

    {
        title: "Content That Connects",
        category: "content",
        categoryName: "Creative Content",
        description: "Creative content designed to communicate and connect.",
        image: "images/portfolio1.webp"
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

        projectCard.innerHTML = `
            <img
                class="project-image"
                src="${project.image}"
                alt="${project.title}"
                loading="lazy"
            >

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

    if (!contactForm || !formMessage) {
        return;
    }


    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const service = document.querySelector("#service").value;
        const message = document.querySelector("#message").value.trim();


        if (!name || !email || !service || !message) {

            formMessage.textContent =
                "Please complete all fields before sending.";

            return;
        }


        const contactData = {

            name: name,
            email: email,
            service: service,
            message: message

        };


        localStorage.setItem(
            "contactFormData",
            JSON.stringify(contactData)
        );


        formMessage.textContent = `
            Thank you, ${name}! Your project information has been saved.
            I will be in touch soon.
        `;


        contactForm.reset();

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