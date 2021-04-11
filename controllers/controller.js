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
// Render new Elements
// const carList = document.querySelector("#carList");
// const carWheel = document.querySelector("#carWheel");
//Submit Car Form & Remove Form
form.addEventListener('submit', function (e) {
    car = new Car(plate.value.toUpperCase(), color.value.toUpperCase(), brand.value.toUpperCase());
    if (plate.value == "" && color.value == "" && brand.value == "") {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "El campo es obligatorio";
        color.classList.add("is-invalid");
        document.getElementById("errorColor").textContent = "El campo es obligatorio";
        brand.classList.add("is-invalid");
        document.getElementById("errorBrand").textContent = "El campo es obligatorio";
    }
    else if (!(/^\d{4}[a-z]{3}/.test(plate.value))) {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "La matricula debe contener 4 numeros y 3 letras";
    }
    else if ((/^\d{4}[a-z]{3}/.test(plate.value))) {
        document.getElementById("carPlate").textContent = "" + car.plate;
        document.getElementById("carColor").textContent = "" + car.color;
        document.getElementById("carBrand").textContent = "" + car.brand;
        carForm.remove();
        wheelApp.style.display = 'block';
    }
    e.preventDefault();
});
// (/^\d{4}[a-z]{3}/.test(plate.value))
//Submit Wheel Form
wheelForm.addEventListener('submit', function (e) {
    //Wheel Inputs Form
    var marcaRueda1 = document.querySelector("#marcaRueda1");
    var marcaRueda2 = document.querySelector("#marcaRueda2");
    var marcaRueda3 = document.querySelector("#marcaRueda3");
    var marcaRueda4 = document.querySelector("#marcaRueda4");
    var diametro1 = document.querySelector("#diametro1");
    var diametro2 = document.querySelector("#diametro2");
    var diametro3 = document.querySelector("#diametro3");
    var diametro4 = document.querySelector("#diametro4");
    var marca1 = marcaRueda1.value.toUpperCase();
    var marca2 = marcaRueda2.value.toUpperCase();
    var marca3 = marcaRueda3.value.toUpperCase();
    var marca4 = marcaRueda4.value.toUpperCase();
    var wheel1 = diametro1.value;
    var wheel2 = diametro2.value;
    var wheel3 = diametro3.value;
    var wheel4 = diametro4.value;
    var displayWheel = document.querySelector('#displayWheel');
    if (marcaRueda1.value == "" && marcaRueda2.value == ""
        && marcaRueda3.value == "" && marcaRueda1.value == ""
        && diametro1.value == "" && diametro2.value == ""
        && diametro3.value == "" && diametro4.value == "") {
        marcaRueda1.classList.add("is-invalid");
        document.getElementById("errorRueda1").textContent = "El campo es obligatorio";
        marcaRueda2.classList.add("is-invalid");
        document.getElementById("errorRueda2").textContent = "El campo es obligatorio";
        marcaRueda3.classList.add("is-invalid");
        document.getElementById("errorRueda3").textContent = "El campo es obligatorio";
        marcaRueda4.classList.add("is-invalid");
        document.getElementById("errorRueda4").textContent = "El campo es obligatorio";
        diametro1.classList.add("is-invalid");
        document.getElementById("errorDiametro1").textContent = "El campo es obligatorio";
        diametro2.classList.add("is-invalid");
        document.getElementById("errorDiametro2").textContent = "El campo es obligatorio";
        diametro3.classList.add("is-invalid");
        document.getElementById("errorDiametro3").textContent = "El campo es obligatorio";
        diametro4.classList.add("is-invalid");
        document.getElementById("errorDiametro4").textContent = "El campo es obligatorio";
    }
    else if (parseFloat(diametro1.value) > 2 || parseFloat(diametro1.value) < 0.4) {
        diametro1.classList.add("is-invalid");
        document.getElementById("errorDiametro1").textContent = "El diámetro no es correcto";
    }
    else if (parseFloat(diametro2.value) > 2 || parseFloat(diametro2.value) < 0.4) {
        diametro2.classList.add("is-invalid");
        document.getElementById("errorDiametro2").textContent = "El diámetro no es correcto";
    }
    else if (parseFloat(diametro3.value) > 2 || parseFloat(diametro3.value) < 0.4) {
        diametro3.classList.add("is-invalid");
        document.getElementById("errorDiametro3").textContent = "El diámetro no es correcto";
    }
    else if (parseFloat(diametro4.value) > 2 || parseFloat(diametro4.value) < 0.4) {
        diametro4.classList.add("is-invalid");
        document.getElementById("errorDiametro4").textContent = "El diámetro no es correcto";
    }
    else if (true) {
        displayWheel.style.display = 'block';
        document.getElementById("brand1").textContent = "" + marca1;
        document.getElementById("rueda1").textContent = "" + wheel1;
        document.getElementById("brand2").textContent = "" + marca2;
        document.getElementById("rueda2").textContent = "" + wheel2;
        document.getElementById("brand3").textContent = "" + marca3;
        document.getElementById("rueda3").textContent = "" + wheel3;
        document.getElementById("brand4").textContent = "" + marca4;
        document.getElementById("rueda4").textContent = "" + wheel4;
        wheelForm.reset();
    }
    e.preventDefault();
});
// //Blur effect
form.addEventListener('blur', function (e) {
    if (e.target.value != "")
        e.target.classList.remove('is-invalid');
}, true);
wheelForm.addEventListener('blur', function (e) {
    if (e.target.value != "")
        e.target.classList.remove('is-invalid');
}, true);
