        const op_pastel = document.getElementById("op1")
        const op_coxinha = document.getElementById("op2")
        const op_bebidas = document.getElementById("op3")



        op_pastel.addEventListener("click", function () {

            document.querySelector(".cardapio").style.display = "block"
            document.querySelector(".cardapio2").style.display = "none"
            document.querySelector(".bebidas").style.display = "none"

        });

        op_coxinha.addEventListener("click", function () {

            document.querySelector(".cardapio").style.display = "none"
            document.querySelector(".cardapio2").style.display = "block"
            document.querySelector(".bebidas").style.display = "none"
        });


        op_bebidas.addEventListener("click", function () {

            document.querySelector(".cardapio").style.display = "none"
            document.querySelector(".cardapio2").style.display = "none"
            document.querySelector(".bebidas").style.display = "block"
        });




        const ifood = document.querySelectorAll(".pedir")

        ifood.forEach(function (button) {
            button.addEventListener("click", function () {
                window.open("https://www.ifood.com.br/delivery/feira-de-santana-ba/tio-do-pastel-cidade-nova/815fa20a-6c75-4ac8-ad9c-d18857b03cfe", "_blank");
            });
        });


        const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000);
