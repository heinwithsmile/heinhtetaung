// alert("Hello");
const jobTitles = ["Web Developer", "UI/UX Designer", "Software Engineer"];
let currentIndex = 0;

function updateJobText() {
  const jobElement = document.getElementById("career");
  if (jobElement) {
    jobElement.textContent = jobTitles[currentIndex];
    currentIndex = (currentIndex + 1) % jobTitles.length;
  } else {
    console.error("Element with id 'career' not found.");
  }
}

updateJobText();
setInterval(updateJobText, 5000);
