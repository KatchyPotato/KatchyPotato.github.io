// ChatGPT handled a lot of the event listener logic

document.addEventListener("DOMContentLoaded", () => {

  // launch website button
  const deployButton = document.querySelector(".deploy-btn");
  if (deployButton) {
    deployButton.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.location.href = "portfolio.html";
      }, 350);
    });
  }

  // github button
  const githubImage = document.querySelector(".github-button");
  if (githubImage) {
    githubImage.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.open("https://github.com/KatchyPotato", "_blank");
      }, 350);
    });
  }

  // linkedin button
  const linkedinImage = document.querySelector(".linkedin-button");
  if (linkedinImage) {
    linkedinImage.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.open("https://www.linkedin.com/in/judah-gaudy-7059aa3a7/", "_blank");
      }, 350);
    });
  }

});

