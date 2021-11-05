import $ from "jquery";

export default (function () {
  const slider = $(".modal-work__slider");
  slider.on("click", (event) => {
    event.stopPropagation();
  });
  // Slider: https://kenwheeler.github.io/slick/
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: true
  });

  const slickButtonBack = $("#slick-slide-control00");
  const slickButtonNext = $("#slick-slide-control01");

  slickButtonBack.on("click", function () {
    slickButtonBack.css({ backgroundColor: "#fff" });
    slickButtonNext.css({ backgroundColor: "transparent" });
  });

  slickButtonNext.on("click", function () {
    slickButtonBack.css({ backgroundColor: "transparent" });
    slickButtonNext.css({ backgroundColor: "#fff" });
  });
})();
