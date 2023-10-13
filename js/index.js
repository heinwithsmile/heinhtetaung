// const jobTitles = ["Web Developer", "IT Trainer", "Freelancer"];
// let currentIndex = 0;

// function updateJobText() {
//   const jobElement = document.getElementById("career");
//   if (jobElement) {
//     jobElement.textContent = jobTitles[currentIndex];
//     currentIndex = (currentIndex + 1) % jobTitles.length;
//   } else {
//     console.error("Element with id 'career' not found.");
//   }
// }

// updateJobText();
// setInterval(updateJobText, 3000);

/* Smooth Effect for Links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/* Scroll to Top Behavior */
const btn = document.querySelector('.btn-top');

btn.addEventListener('click', function() {
  scroll(0, 500);
})

window.onscroll = function showHide() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    btn.style.transform = 'scale(1)';
  }
  else {
    btn.style.transform = 'scale(0)';
  }
}

function scroll (target, duration) {
  if (duration <= 0) {return};
  let difference = target - document.documentElement.scrollTop;
  let speed = difference / duration * 10;
  setTimeout(function() {
    document.documentElement.scrollTop += speed;
    if (document.documentElement.scrollTop == target) {return};
    scroll(target, duration - 10);
  }, 10);
}