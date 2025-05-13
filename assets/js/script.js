var swiper = new Swiper(".myHero", {
    spaceBetween: 20,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".myReviews", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      
      1200: {
        slidesPerView: 3,
      },
      1550: {
        slidesPerView: 4,
      },
    },
  });


  document.addEventListener("DOMContentLoaded", function () {
    const modalBtn = document.getElementById("modal-btn");
    const filter = document.getElementById("filter");
    const filterMobile = document.getElementById("filter-mobile");

    modalBtn.addEventListener("click", function () {
      if (window.innerWidth < 992) { // Check if it's mobile view
        filterMobile.innerHTML = filter.innerHTML; // Clone filter content
        new bootstrap.Modal(document.getElementById("filterModal")).show();
      }
    });
  });


  var swiper = new Swiper(".myCustom", {
    autoplay: true,
    loop: true,
  });


  var swiper = new Swiper(".myblogs", {
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1550: {
        slidesPerView: 4,
      },
    },
  });



  var swiper = new Swiper(".myProduct", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
      1550: {
        slidesPerView: 6,
      },
    },
  });
  var swiper2 = new Swiper(".myProduct2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  document.querySelectorAll('.zoom-container').forEach(container => {
    const img = container.querySelector('.zoom-image');
    const lens = container.querySelector('.zoom-lens');

    container.addEventListener('mousemove', function (e) {
        const { left, top, width, height } = this.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        // Position the lens
        lens.style.left = `${x}px`;
        lens.style.top = `${y}px`;
        lens.style.display = 'block';

        // Move the image background for zoom effect
        img.style.transform = `scale(1.5) translate(-${(x / width) * 100}%, -${(y / height) * 100}%)`;
    });

    container.addEventListener('mouseleave', function () {
        lens.style.display = 'none';
        img.style.transform = `scale(1) translate(0, 0)`;
    });
});
