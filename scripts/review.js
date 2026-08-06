let reviews = Number(localStorage.getItem("reviews")) || 0;


reviews++;


localStorage.setItem("reviews", reviews);


document.querySelector("#counter").textContent = reviews;


document.querySelector("#year").textContent =
new Date().getFullYear();