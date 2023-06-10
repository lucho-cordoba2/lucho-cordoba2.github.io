document.getElementById("totalPago").textContent = "0";

// Función para calcular el total a pagar
function calcularTotal() {
  // Obtener los valores del formulario
  var cantidad = parseInt(document.getElementById("cantidadTickets").value);
  var categoria = parseInt(document.getElementById("categoriaSelect").value);

  // Calcular el precio según la categoría
  var precioUnitario = 200;
  var descuento = 0;
  if (categoria === 0) {
    descuento = 0;
  }

  if (categoria === 1) {
    descuento = 0.8;
  }

  if (categoria === 2) {
    descuento = 0.5;
  }

  if (categoria === 3) {
    descuento = 0.15;
  }

  // Calcular el total a pagar
  var total = cantidad * precioUnitario * (1 - descuento);

  // Mostrar el total en el elemento HTML
  document.getElementById("totalPago").textContent = total.toFixed(2);
  // Deshabilitar el botón "Resumen"
  document.getElementById("btnResumen").disabled = true;
}

// Función para mostrar el resumen
function mostrarResumen() {
  // Calcular el total antes de mostrar el resumen

  calcularTotal();

  // Mostrar el resumen en un cuadro de diálogo o en cualquier otro lugar deseado
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("mail").value;
  var cantidad = parseInt(document.getElementById("cantidadTickets").value);
  var categoria = document.getElementById("categoriaSelect").value;
  var total = document.getElementById("totalPago").textContent;

  // Ejemplo de mostrar el resumen en un cuadro de diálogo
  alert(
    "Resumen:\n\nNombre: " +
      nombre +
      " " +
      apellido +
      "\nEmail: " +
      email +
      "\nCantidad de tickets: " +
      cantidad +
      "\nCategoría: " +
      categoria +
      "\nTotal a pagar: $" +
      total
  );
}

// Escuchar el evento de clic en el botón "Resumen" y llamar a la función mostrarResumen
document.getElementById("btnResumen").addEventListener("click", mostrarResumen);

// Function to check the ticket quantity and category and enable/disable the "Resumen" button
function checkTicketQuantity() {
  var cantidad = parseInt(document.getElementById("cantidadTickets").value);
  var categoria = document.getElementById("categoriaSelect").value;
  var resumenButton = document.getElementById("btnResumen");

  if (cantidad >= 1 && categoria !== "") {
    resumenButton.disabled = false;
  } else {
    resumenButton.disabled = true;
  }
}

// Attach an event listener to the ticket quantity input field
document
  .getElementById("cantidadTickets")
  .addEventListener("input", checkTicketQuantity);

// Attach an event listener to the category select field
document
  .getElementById("categoriaSelect")
  .addEventListener("change", checkTicketQuantity);

// Función para borrar el total y restablecerlo a 0
function borrarTotal() {
  // Verificar si el botón "Resumen" está deshabilitado
  var btnResumen = document.getElementById("btnResumen");
  if (btnResumen.disabled) {
    document.getElementById("totalPago").textContent = "0"; // Establecer el contenido del elemento HTML del total en 0
    btnResumen.disabled = true; // Deshabilitar el botón "Resumen"
  }
}
