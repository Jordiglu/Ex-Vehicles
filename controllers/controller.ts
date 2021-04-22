let car: Car;
//DOM
const form = document.querySelector('.car-Form') as HTMLFormElement;
const carForm = document.querySelector('#carApp') as HTMLFormElement;
const wheelApp = document.querySelector('#wheelApp') as HTMLFormElement;
const wheelForm: any = document.querySelector('#wheelForm') as HTMLFormElement;

//Submit Car Form & Remove Form

let acumerror: number = 0;
form.addEventListener('submit', (e: Event) => {
   e.preventDefault();

   const plate = document.querySelector("#plate") as HTMLInputElement;
   const brand = document.querySelector("#brand") as HTMLInputElement;
   const color = document.querySelector("#color") as HTMLInputElement;

   if (plate.value == "") {
      plate.classList.add("is-invalid");
      document.getElementById("errorPlate")!.textContent = "El campo es obligatorio";
      acumerror++;
   }
   else if (color.value == "") {
      color.classList.add("is-invalid");
      document.getElementById("errorColor")!.textContent = "El campo es obligatorio";
      acumerror++;
   } else if (brand.value == "") {
      brand.classList.add("is-invalid");
      document.getElementById("errorBrand")!.textContent = "El campo es obligatorio";
      acumerror++;
   }
   else if (!(/^\d{4}[a-z]{3}/.test(plate.value))) {
      plate.classList.add("is-invalid");
      document.getElementById("errorPlate")!.textContent = "La matricula debe contener 4 numeros y 3 letras";
      acumerror++;
   }
   if (acumerror == 0) {
      car = new Car(plate.value.toUpperCase(), color.value.toUpperCase(), brand.value.toUpperCase());
      document.getElementById("carPlate")!.textContent = `${car.plate}`
      document.getElementById("carColor")!.textContent = `${car.color}`
      document.getElementById("carBrand")!.textContent = `${car.brand}`
      carForm.remove();
      wheelApp.style.display = 'block';
   }
   console.log(acumerror);

});

//Submit Wheel Form
let error: number = 0;
wheelForm.addEventListener('submit', (e: Event) => {

   const displayWheel: any = document.querySelector('#displayWheel');
   // Wheel Inputs Form
   for (let i = 1; i < 5; i++) {
      let marcaRueda: any = <HTMLInputElement>document.getElementById("marcaRueda" + i);

      let diametro: any = <HTMLInputElement>document.getElementById("diametro" + i);

      if (marcaRueda.value == "" && diametro.value == "") {
         marcaRueda.classList.add('is-invalid');
         document.getElementById("errorRueda" + i)!.textContent = "El campo es obligatorio";
         error++;
         diametro.classList.add("is-invalid");
         document.getElementById("errorDiametro" + i)!.textContent = "El campo es obligatorio";
         error++;

      } else if (parseFloat(diametro.value) > 2 || parseFloat(diametro.value) < 0.4) {
         diametro.classList.add("is-invalid");
         document.getElementById("errorDiametro" + i)!.textContent = "El diámetro no es correcto";
         error++;
      }
   }
   if (error > 0) {
      error = 0;
   } else {
      for (let i = 1; i < 5; i++) {
         let marcaRueda: any = <HTMLInputElement>document.getElementById("marcaRueda" + i);

         let diametro: any = <HTMLInputElement>document.getElementById("diametro" + i);

         document.getElementById("brand" + i)!.textContent = `${marcaRueda.value}`;
         document.getElementById("rueda" + i)!.textContent = `${diametro.value}`;
         displayWheel.style.display = 'block';
      }
      wheelForm.reset();
   }
   e.preventDefault();
});

// //Blur effect
form.addEventListener('blur', function (e: any) {
   if (e.target.value != "")
      e.target.classList.remove('is-invalid');
}, true);

wheelForm.addEventListener('blur', function (e: any) {
   if (e.target.value != "")
      e.target.classList.remove('is-invalid');
}, true);

