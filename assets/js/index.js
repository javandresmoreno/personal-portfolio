/* --------------- Menu ---------------------------*/

/*Función Anónima Autoejecutable
es como crear un closure, para encapsular el codigo y
no tener problemas de hoisting o nombres de variables.
Así lo hago reutilizable. */

((doc) => {
  const $btnMenu = doc.querySelector(".menu-btn-mobile"),
    $menu = doc.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  /* Tecnica de delegación de eventos
  en este caso para que cuando le de clic en 
  algún elemento del menú, este se cierre y 
  aparezca nuevamente las 3 barras. */

  // Asigno el evento click al elemento document

  doc.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* --------------- Contact Form ---------------------------*/
// ((d) => {})(document);

/* Las variables que empiezan con el signo pesos, es una 
buena practica para indicar que estas hacen referencia a 
elementos del DOM (Document Object Model) y no de la lógica de
programación. */

((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/javandresmoreno@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        // con este codigo se activa la ventana modal
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar. Intenta nuevamente.";
        $response,
          (querySelector("h3").innerHTML = `Error ${err.status} : ${message}`);
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
