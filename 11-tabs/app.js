const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active class from all/other btns
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    // hide all the other article
    articles.forEach(function (article) {
      article.classList.remove("active");
      // if (id === article.getAttribute("id")) { // SOLUTION 1
      //   article.classList.add("active");
      // }
    });

    // showing selected content
    const element = document.getElementById(id); // SOLUTION 2
    element.classList.add("active");
  }
});
