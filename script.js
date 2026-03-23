
const deployButton = document.querySelector(".deploy-btn");

deployButton.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        window.location.href = "portfolio.html";
    }, 350);
})