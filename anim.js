const titles = document.querySelectorAll(".anim");

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting == true) {
      entry.target.classList.add("animate-right");
    } else {
      entry.target.classList.remove("animate-right");
    }
  })
})

titles.forEach(title => {
  observer.observe(title);
})