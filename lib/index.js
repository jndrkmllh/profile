console.log("hello from JS")

const myLabels = document.querySelectorAll('.lbl-toggle');

// console.log(myLabels)

Array.from(myLabels).forEach(label => {
  label.addEventListener('click', e => {
    e.preventDefault();

    // console.dir(label.previousElementSibling.checked)
    let checkbox = label.previousElementSibling
    checkbox.checked = !checkbox.checked;
  });
});

const projectLinks = document.querySelectorAll(".project-link");
const titles = document.querySelectorAll(".title");
const onlineChecker = document.querySelectorAll(".online-checker");
let index = 0;

// console.log(projectLinks)
console.log(titles)

Array.from(projectLinks).forEach(link => {
  console.dir(link);

  // const url = `https://cors-anywhere.herokuapp.com/${link.href}`;
  const url = link.href;
  // const request = new Request(url);

  fetch(url)
  .then(response => {
      if (response.ok) {
          console.log("Heroku app is online.");
          // Handle the app being online (e.g., update the UI accordingly)
          titles.forEach(title => {
            if (link.ariaLabel.toLowerCase() === title.innerText.toLowerCase()) {
              // console.dir(title.nextElementSibling.classList.add("success"));
              title.nextElementSibling.classList.add("success");
              title.nextElementSibling.innerText = "online";
              title.nextElementSibling.classList.remove("failed");
            }
          });
      } else {
          console.log("Heroku app is offline or returned an error.");
          // Handle the app being offline or returning an error
          titles.forEach(title => {
            if (link.ariaLabel.toLowerCase() === title.innerText.toLowerCase()) {
              // console.dir(title.nextElementSibling.classList.add("success"));
              title.nextElementSibling.classList.remove("success");
              title.nextElementSibling.innerText = "offline";
              title.nextElementSibling.classList.add("failed");
            }
          });
      }
  })
  .then(index++)
  .catch(error => {
      console.log("Failed to reach Heroku app. It might be offline.", error);
      // Handle the app being unreachable (e.g., update the UI to show the app is offline)
      titles.forEach(title => {
        if (link.ariaLabel.toLowerCase() === title.innerText.toLowerCase()) {
          // console.dir(title.nextElementSibling.classList.add("success"));
          title.nextElementSibling.classList.remove("success");
          title.nextElementSibling.innerText = "offline";
          title.nextElementSibling.classList.add("failed");
        }
      });
  });
});
