$("h1").fadeOut(1000);
const checkpoint = 300;
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
      opacity = 1 - currentScroll / checkpoint;
    } else {
      opacity = 0;
    }
    document.querySelector(".beg-scroll").style.opacity = opacity;
  });