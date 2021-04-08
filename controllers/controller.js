"use strict";
var car;
//DOM
var form = document.querySelector('.car-Form');
var carForm = document.querySelector('#carApp');
var wheelApp = document.querySelector('#wheelApp');
var wheelForm = document.querySelector('#wheelForm');
//Inputs Car Form
var plate = document.querySelector("#plate");
var brand = document.querySelector("#brand");
var color = document.querySelector("#color");
//Inputs wheel Form
var marcaRueda1 = document.querySelector("#marcaRueda1");
var marcaRueda2 = document.querySelector("#marcaRueda2");
var marcaRueda3 = document.querySelector("#marcaRueda3");
var marcaRueda4 = document.querySelector("#marcaRueda4");
var diametro1 = document.querySelector("#diametro1");
var diametro2 = document.querySelector("#diametro2");
var diametro3 = document.querySelector("#diametro3");
var diametro4 = document.querySelector("#diametro4");
// Render new Elements
var carList = document.querySelector("#carList");
var carWheel = document.querySelector("#carWheel");
//Submit Car Form & Remove Form
form.addEventListener('submit', function (e) {
    car = new Car(plate.value.toUpperCase(), color.value.toUpperCase(), brand.value.toUpperCase());
    if (plate.value == "") {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "El campo es obligatorio";
    }
    else if (!(/^\d{4}[A-Z a-z]{3}/.test(plate.value))) {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "La matricula debe contener 4 numeros y 3 letras";
    }
    else {
        carForm.remove();
        wheelApp.style.display = 'block';
    }
    if ((/^\d{4}[a-z]{3}/.test(plate.value))) {
        var div = document.createElement("div");
        div.innerHTML = " \n    <strong>CAR:</strong><br>\n    <div class=\"row mb-3 pt-3\"> \n      <div class=\"form-group col-md-2\">\n         <strong>Plate</strong>: " + car.plate + "\n      </div>\n      <div class=\"form-group col-md-2\">\n        <strong>Color</strong>: " + car.color + "\n      </div>\n       <div class=\"form-group col-md-2\">\n          <strong>Brand</strong>: " + car.brand + "<br>\n       </div>\n    </div>\n    </div>";
        carList === null || carList === void 0 ? void 0 : carList.appendChild(div);
    }
    e.preventDefault();
});
//Submit Wheel Form
wheelForm.addEventListener('submit', function (e) {
    var marca1 = marcaRueda1.value.toUpperCase();
    var marca2 = marcaRueda2.value.toUpperCase();
    var marca3 = marcaRueda3.value.toUpperCase();
    var marca4 = marcaRueda4.value.toUpperCase();
    var wheel1 = diametro1.value;
    var wheel2 = diametro2.value;
    var wheel3 = diametro3.value;
    var wheel4 = diametro4.value;
    if (marcaRueda1.value == "") {
        marcaRueda1.classList.add("is-invalid");
        document.getElementById("errorRueda1").textContent = "El campo es obligatorio";
    }
    if (diametro1.value == "") {
        diametro1.classList.add("is-invalid");
        document.getElementById("errorDiametro1").textContent = "El campo es obligatorio";
    }
    else if (parseFloat(diametro1.value) > 2 || parseFloat(diametro1.value) < 0.4) {
        diametro1.classList.add("is-invalid");
        document.getElementById("errorDiametro1").textContent = "El diámetro no es correcto";
    }
    if (marcaRueda2.value == "") {
        marcaRueda2.classList.add("is-invalid");
        document.getElementById("errorRueda2").textContent = "El campo es obligatorio";
    }
    if (diametro2.value == "") {
        diametro2.classList.add("is-invalid");
        document.getElementById("errorDiametro2").textContent = "El campo es obligatorio";
    }
    else if (parseFloat(diametro2.value) > 2 || parseFloat(diametro2.value) < 0.4) {
        diametro2.classList.add("is-invalid");
        document.getElementById("errorDiametro2").textContent = "El diámetro no es correcto";
    }
    if (marcaRueda3.value == "") {
        marcaRueda3.classList.add("is-invalid");
        document.getElementById("errorRueda3").textContent = "El campo es obligatorio";
    }
    if (diametro3.value == "") {
        diametro3.classList.add("is-invalid");
        document.getElementById("errorDiametro3").textContent = "El campo es obligatorio";
    }
    else if (parseFloat(diametro3.value) > 2 || parseFloat(diametro3.value) < 0.4) {
        diametro3.classList.add("is-invalid");
        document.getElementById("errorDiametro3").textContent = "El diámetro no es correcto";
    }
    if (marcaRueda4.value == "") {
        marcaRueda4.classList.add("is-invalid");
        document.getElementById("errorRueda4").textContent = "El campo es obligatorio";
    }
    if (diametro4.value == "") {
        diametro4.classList.add("is-invalid");
        document.getElementById("errorDiametro4").textContent = "El campo es obligatorio";
    }
    else if (parseFloat(diametro4.value) > 2 || parseFloat(diametro4.value) < 0.4) {
        diametro4.classList.add("is-invalid");
        document.getElementById("errorDiametro4").textContent = "El diámetro no es correcto";
    }
    else if (true) {
        var div = document.createElement("div");
        div.innerHTML = "<strong>Wheels:</strong><br>\n    <div class=\"row mb-4\"> \n      <div class=\"form-group col-md-2\">\n         <strong>Marca Rueda1</strong>: " + marca1 + "\n         <strong>Diametro</strong>: " + wheel1 + "\n      </div>\n      <div class=\"form-group col-md-2\">\n        <strong>Marca Rueda 2</strong>:" + marca2 + "\n        <strong>Diametro</strong>:  " + wheel2 + "\n      </div>\n    <div class=\"form-group col-md-2\">\n      <strong>Marca Rueda 3</strong>: " + marca3 + "\n      <strong>Diametro</strong>:  " + wheel3 + "\n    </div>\n    <div class=\"form-group col-md-2\">\n        <strong>Marca Rueda 4</strong>: " + marca4 + "\n       <strong>Diametro</strong>:  " + wheel4 + "\n    </div>\n       </div>\n    </div>";
        carWheel === null || carWheel === void 0 ? void 0 : carWheel.appendChild(div);
    }
    e.preventDefault();
});
// //Blur effect
wheelForm.addEventListener('blur', function (e) {
    if (e.target.value != "")
        e.target.classList.remove('is-invalid');
}, true);
// console.log(new Wheel(diame.value,wheel1));
