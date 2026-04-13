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

  // scratch button
  const scratchImage = document.querySelector(".scratch-button");
  if (scratchImage) {
    scratchImage.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.open("https://scratch.mit.edu/users/Katchy_Potato/", "_blank");
      }, 350);
    });
  }

  // angelic descent button
  const angelic = document.querySelector(".angelic-descent");
  if (angelic) {
    angelic.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.open("projects/angelic-descent.html", "_blank");
      }, 350);
    });
  }

  // pixel playground button
  const pixelPlayground = document.querySelector(".pixel-playground");
  if (pixelPlayground) {
    pixelPlayground.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.open("projects/pixel-playground.html", "_blank");
      }, 350);
    });
  }

  // peaches daisies and stars button
  const peaches= document.querySelector(".peaches-daisies-stars");
  if (peaches) {
    peaches.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.open("projects/peaches-daisies-stars.html", "_blank");
      }, 350);
    });
  }

  // resume button
  const resumeButton = document.querySelector(".resume-button");
  if (resumeButton) {
    resumeButton.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.open("resume.html", "_blank");
      }, 350);
    });
  }

  // resume clicked
  const viewer = document.querySelector(".viewer");
  if (viewer){
  viewer.addEventListener("click", () => {
    viewer.classList.toggle("zoomed");
  });
}

  // download resume button
  const downloadButton = document.querySelector(".download-button");
  if (downloadButton) {
    downloadButton.addEventListener("click", (e) => {
      e.preventDefault(); 
      setTimeout(() => {
        window.open("images/resume.pdf", "_blank"); 
      }, 350);
    });
  }

  // to top button
  const toTopButton = document.querySelector(".to-top");
  if (toTopButton) {
  toTopButton.addEventListener("click", (e) => {
    e.preventDefault();

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 350);
  });
}

  // menu button
  const menu = document.querySelector(".menu")
  const sidebar = document.querySelector(".sidebar")
  if (menu && sidebar) {
    menu.addEventListener("click", (e) => {
      e.preventDefault();
      sidebar.style.display = "flex";
    })
  }
  
  // close button
  const close = document.querySelector(".close")
  if (close && sidebar) {
    close.addEventListener("click", (e) => {
      e.preventDefault();
      sidebar.style.display = "none";
    })
  }
});

