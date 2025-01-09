const myLabels = document.querySelectorAll('.lbl-toggle');

Array.from(myLabels).forEach(label => {
  label.addEventListener('click', e => {
    e.preventDefault();

    let checkbox = label.previousElementSibling
    checkbox.checked = !checkbox.checked;
  });
});

const projectLinks = document.querySelectorAll(".project-link");
const titles = document.querySelectorAll(".title");

Array.from(projectLinks).forEach(link => {
  const url = link.href;

  fetch(url)
  .then(response => {
      if (response.ok) {
          // console.log(`Project is online. ${url}`);
          // Handle the app being online (e.g., update the UI accordingly)
          titles.forEach(title => {
            if (link.ariaLabel.toLowerCase() === title.innerText.toLowerCase()) {
              title.nextElementSibling.classList.remove("failed");
              title.nextElementSibling.innerText = "online";
              title.nextElementSibling.classList.add("success");
            }
          });
      } else {
          // console.log(`Project is offline or returned an error. ${url}`);
          // Handle the app being offline or returning an error
          titles.forEach(title => {
            if (link.ariaLabel.toLowerCase() === title.innerText.toLowerCase()) {
              title.nextElementSibling.classList.remove("success");
              title.nextElementSibling.innerText = "offline";
              title.nextElementSibling.classList.add("failed");
            }
          });
      }
  })
  .catch(error => {
      // console.log("Failed to reach Project. It might be offline.", error);
      // Handle the app being unreachable (e.g., update the UI to show the app is offline)
      titles.forEach(title => {
        if (link.ariaLabel.toLowerCase() === title.innerText.toLowerCase()) {
          title.nextElementSibling.classList.remove("success");
          title.nextElementSibling.innerText = "offline";
          title.nextElementSibling.classList.add("failed");
        }
      });
  });
});
