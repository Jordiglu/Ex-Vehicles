"use strict";
var car;
//DOM
var form = document.querySelector('.car-Form');
var carForm = document.querySelector('#carApp');
var wheelApp = document.querySelector('#wheelApp');
var wheelForm = document.querySelector('#wheelForm');
//Submit Car Form & Remove Form
var acumerror = 0;
form.addEventListener('submit', function (e) {
    var plate = document.querySelector("#plate");
    var brand = document.querySelector("#brand");
    var color = document.querySelector("#color");
    if (plate.value == "" && color.value == "" && brand.value == "") {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "El campo es obligatorio";
        color.classList.add("is-invalid");
        document.getElementById("errorColor").textContent = "El campo es obligatorio";
        brand.classList.add("is-invalid");
        document.getElementById("errorBrand").textContent = "El campo es obligatorio";
        acumerror++;
    }
    else if (!(/^\d{4}[a-z]{3}/.test(plate.value))) {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "La matricula debe contener 4 numeros y 3 letras";
        acumerror++;
    }
    if (acumerror > 0) {
        acumerror = 0;
    }
    else {
        car = new Car(plate.value.toUpperCase(), color.value.toUpperCase(), brand.value.toUpperCase());
        document.getElementById("carPlate").textContent = "" + car.plate;
        document.getElementById("carColor").textContent = "" + car.color;
        document.getElementById("carBrand").textContent = "" + car.brand;
        carForm.remove();
        wheelApp.style.display = 'block';
    }
    e.preventDefault();
});
//Submit Wheel Form
var error = 0;
wheelForm.addEventListener('submit', function (e) {
    var displayWheel = document.querySelector('#displayWheel');
    // Wheel Inputs Form
    for (var i = 1; i < 5; i++) {
        var marcaRueda = document.getElementById("marcaRueda" + i);
        var diametro = document.getElementById("diametro" + i);
        if (marcaRueda.value == "" && diametro.value == "") {
            marcaRueda.classList.add('is-invalid');
            document.getElementById("errorRueda" + i).textContent = "El campo es obligatorio";
            error++;
            diametro.classList.add("is-invalid");
            document.getElementById("errorDiametro" + i).textContent = "El campo es obligatorio";
            error++;
        }
        else if (parseFloat(diametro.value) > 2 || parseFloat(diametro.value) < 0.4) {
            diametro.classList.add("is-invalid");
            document.getElementById("errorDiametro" + i).textContent = "El diámetro no es correcto";
            error++;
        }
    }
    if (error > 0) {
        error = 0;
    }
    else {
        for (var i = 1; i < 5; i++) {
            var marcaRueda = document.getElementById("marcaRueda" + i);
            var diametro = document.getElementById("diametro" + i);
            document.getElementById("brand" + i).textContent = "" + marcaRueda.value;
            document.getElementById("rueda" + i).textContent = "" + diametro.value;
            displayWheel.style.display = 'block';
        }
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
