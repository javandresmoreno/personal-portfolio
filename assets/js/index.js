/* --------------- Menu -----------------*/

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
