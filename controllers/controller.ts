let car: Car;
//DOM
const form = document.querySelector('.car-Form') as HTMLFormElement;
const carForm = document.querySelector('#carApp') as HTMLFormElement;
const wheelApp = document.querySelector('#wheelApp') as HTMLFormElement;
const wheelForm: any = document.querySelector('#wheelForm') as HTMLFormElement;

//Inputs Car Form
const plate = document.querySelector("#plate") as HTMLInputElement;
const brand = document.querySelector("#brand") as HTMLInputElement;
const color = document.querySelector("#color") as HTMLInputElement;

//Inputs wheel Form

const marcaRueda1 = document.querySelector("#marcaRueda1") as HTMLInputElement;
const marcaRueda2 = document.querySelector("#marcaRueda2") as HTMLInputElement;
const marcaRueda3 = document.querySelector("#marcaRueda3") as HTMLInputElement;
const marcaRueda4 = document.querySelector("#marcaRueda4") as HTMLInputElement;

const diametro1 = document.querySelector("#diametro1") as HTMLInputElement;
const diametro2 = document.querySelector("#diametro2") as HTMLInputElement;
const diametro3 = document.querySelector("#diametro3") as HTMLInputElement;
const diametro4 = document.querySelector("#diametro4") as HTMLInputElement;




// Render new Elements
const carList = document.querySelector("#carList");
const carWheel = document.querySelector("#carWheel");

//Submit Car Form & Remove Form
form.addEventListener('submit', (e: Event) => {
   car = new Car(plate.value.toUpperCase(), color.value.toUpperCase(), brand.value.toUpperCase());
   if (plate.value == "") {
      plate.classList.add("is-invalid");
      document.getElementById("errorPlate")!.textContent = "El campo es obligatorio";
   } else if (!(/^\d{4}[A-Z a-z]{3}/.test(plate.value))) {
      plate.classList.add("is-invalid");
      document.getElementById("errorPlate")!.textContent = "La matricula debe contener 4 numeros y 3 letras";
   } else {
      carForm.remove();
      wheelApp.style.display = 'block';
   }
   if ((/^\d{4}[a-z]{3}/.test(plate.value))) {
      const div = document.createElement("div");
      div.innerHTML = ` 
    <strong>CAR:</strong><br>
    <div class="row mb-3 pt-3"> 
      <div class="form-group col-md-2">
         <strong>Plate</strong>: ${car.plate}
      </div>
      <div class="form-group col-md-2">
        <strong>Color</strong>: ${car.color}
      </div>
       <div class="form-group col-md-2">
          <strong>Brand</strong>: ${car.brand}<br>
       </div>
    </div>
    </div>`
         ;
      carList?.appendChild(div);

   }
   e.preventDefault();

});

//Submit Wheel Form

wheelForm.addEventListener('submit', (e: Event) => {
   let marca1 = marcaRueda1.value.toUpperCase();
   let marca2 = marcaRueda2.value.toUpperCase();
   let marca3 = marcaRueda3.value.toUpperCase();
   let marca4 = marcaRueda4.value.toUpperCase();

   let wheel1 = diametro1.value;
   let wheel2 = diametro2.value;
   let wheel3 = diametro3.value;
   let wheel4 = diametro4.value;

   if (marcaRueda1.value == "") {
      marcaRueda1.classList.add("is-invalid");
      document.getElementById("errorRueda1")!.textContent = "El campo es obligatorio";
   }
   if (diametro1.value == "") {
      diametro1.classList.add("is-invalid");
      document.getElementById("errorDiametro1")!.textContent = "El campo es obligatorio";

   } else if (parseFloat(diametro1.value) > 2 || parseFloat(diametro1.value) < 0.4) {
      diametro1.classList.add("is-invalid");
      document.getElementById("errorDiametro1")!.textContent = "El diámetro no es correcto";

   }
   if (marcaRueda2.value == "") {
      marcaRueda2.classList.add("is-invalid");
      document.getElementById("errorRueda2")!.textContent = "El campo es obligatorio";

   }
   if (diametro2.value == "") {
      diametro2.classList.add("is-invalid");
      document.getElementById("errorDiametro2")!.textContent = "El campo es obligatorio";

   } else if (parseFloat(diametro2.value) > 2 || parseFloat(diametro2.value) < 0.4) {
      diametro2.classList.add("is-invalid");
      document.getElementById("errorDiametro2")!.textContent = "El diámetro no es correcto";

   }
   if (marcaRueda3.value == "") {
      marcaRueda3.classList.add("is-invalid");
      document.getElementById("errorRueda3")!.textContent = "El campo es obligatorio";

   }
   if (diametro3.value == "") {
      diametro3.classList.add("is-invalid");
      document.getElementById("errorDiametro3")!.textContent = "El campo es obligatorio";

   } else if (parseFloat(diametro3.value) > 2 || parseFloat(diametro3.value) < 0.4) {
      diametro3.classList.add("is-invalid");
      document.getElementById("errorDiametro3")!.textContent = "El diámetro no es correcto";

   }
   if (marcaRueda4.value == "") {
      marcaRueda4.classList.add("is-invalid");
      document.getElementById("errorRueda4")!.textContent = "El campo es obligatorio";

   }
   if (diametro4.value == "") {
      diametro4.classList.add("is-invalid");
      document.getElementById("errorDiametro4")!.textContent = "El campo es obligatorio";

   } else if (parseFloat(diametro4.value) > 2 || parseFloat(diametro4.value) < 0.4) {
      diametro4.classList.add("is-invalid");
      document.getElementById("errorDiametro4")!.textContent = "El diámetro no es correcto";

   } else if (true) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>Wheels:</strong><br>
    <div class="row mb-4"> 
      <div class="form-group col-md-2">
         <strong>Marca Rueda1</strong>: ${marca1}
         <strong>Diametro</strong>: ${wheel1}
      </div>
      <div class="form-group col-md-2">
        <strong>Marca Rueda 2</strong>:${marca2}
        <strong>Diametro</strong>:  ${wheel2}
      </div>
    <div class="form-group col-md-2">
      <strong>Marca Rueda 3</strong>: ${marca3}
      <strong>Diametro</strong>:  ${wheel3}
    </div>
    <div class="form-group col-md-2">
        <strong>Marca Rueda 4</strong>: ${marca4}
       <strong>Diametro</strong>:  ${wheel4}
    </div>
       </div>
    </div>`
         ;


      carWheel?.appendChild(div);
      if (true) {
         wheelForm.reset();
      }

   }

   e.preventDefault();
});

// //Blur effect
wheelForm.addEventListener('blur', function (e: any) {
   if (e.target.value != "")
      e.target.classList.remove('is-invalid');
}, true);

// console.log(new Wheel(diame.value,wheel1));


