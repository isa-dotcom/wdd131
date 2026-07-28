// ===============================
// MENU HAMBÚRGUER
// ===============================

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("visible");

    hamburger.textContent =
        navMenu.classList.contains("visible") ? "✖" : "☰";
});

// ===============================
// TEMPLE DATA
// ===============================

const temples = [

{
    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 36677,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
},

{
    templeName: "Recife Brazil",
    location: "Recife, Brazil",
    dedicated: "2000, December, 15",
    area: 37000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
},

{
    templeName: "Campinas Brazil",
    location: "Campinas, São Paulo, Brazil",
    dedicated: "2002, May, 17",
    area: 48400,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
},

{
    templeName: "Porto Alegre Brazil",
    location: "Porto Alegre, Rio Grande do Sul, Brazil",
    dedicated: "2000, December, 17",
    area: 107000,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-60459-main.jpg"
},

{
    templeName: "Rio de Janeiro Brazil",
    location: "Rio de Janeiro, Rio de Janeiro, Brazil",
    dedicated: "2022, May, 8",
    area: 29966,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
},

{
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},

{
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},

{
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},

{
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},

{
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},

{
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},

{
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
}

];

// ===============================
// DISPLAY DOS TEMPLos
// ===============================

const gallery = document.querySelector(".gallery");

function displayTemples(filteredTemples) {

    gallery.innerHTML = "";

    filteredTemples.forEach((temple) => {

        const card = document.createElement("section");

        const name = document.createElement("h2");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;

        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);

    });

}

// Mostrar todos ao abrir

displayTemples(temples);

// ===============================
// FILTROS
// ===============================

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {

    e.preventDefault();

    displayTemples(
        temples.filter(temple =>
            Number(temple.dedicated.split(",")[0]) < 1900
        )
    );

});

document.querySelector("#new").addEventListener("click", (e) => {

    e.preventDefault();

    displayTemples(
        temples.filter(temple =>
            Number(temple.dedicated.split(",")[0]) > 2000
        )
    );

});

document.querySelector("#large").addEventListener("click", (e) => {

    e.preventDefault();

    displayTemples(
        temples.filter(temple =>
            temple.area > 90000
        )
    );

});

document.querySelector("#small").addEventListener("click", (e) => {

    e.preventDefault();

    displayTemples(
        temples.filter(temple =>
            temple.area < 10000
        )
    );

});

// ===============================
// FOOTER
// ===============================

document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#last-modified").textContent =
document.lastModified;