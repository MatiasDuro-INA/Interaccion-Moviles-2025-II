 const slides = document.querySelector(".slides")
        const slideElements = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");
        const prev = document.querySelector(".arrow.left");
        const next = document.querySelector(".arrow.right");

        let index = 0

        function showSlide(i) {
            if (i < 0) index = slideElements.length - 1;
            else if (i >= slideElements.length) index = 0;
            else index = i;

            slides.style.transform = `translateX(-${index * 100}%)`;

            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");
        }

        prev.addEventListener("click", () => showSlide(index - 1));
        next.addEventListener("click", () => showSlide(index + 1));


        dots.forEach(dot => {
            dot.addEventListener("click", (e) => {
                const i = parseInt(e.target.dataset.index);
                showSlide(i);
            });
        });