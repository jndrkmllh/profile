const myLabels = document.querySelectorAll('.lbl-toggle');

Array.from(myLabels).forEach(label => {
  label.addEventListener('click', e => {
    e.preventDefault();

    let checkbox = label.previousElementSibling
    checkbox.checked = !checkbox.checked;
  });
});

const projectLinks = document.querySelectorAll(".project-link");

// Simple object to maintain site status
const siteStatus = {
  'savestrike': true,    // true = online, false = offline
  'moviemojo': false,
  'helpet': false,        // example of an offline site
  'last_theme': true
};

Array.from(projectLinks).forEach(link => {
  const siteName = link.ariaLabel.toLowerCase();
  const statusElement = link.closest('.project-card').querySelector('.online-checker');

  if (siteName in siteStatus) {
    if (siteStatus[siteName]) {
      statusElement.classList.remove("failed");
      statusElement.innerText = "online";
      statusElement.classList.add("success");
    } else {
      statusElement.classList.remove("success");
      statusElement.innerText = "offline";
      statusElement.classList.add("failed");
    }
  }
});
