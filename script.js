const weightInput = document.querySelector("#weight");

const heightInput = document.querySelector("#height");

const button = document.querySelector("#btn");

const result = document.querySelector("#result");

let bmi;

button.addEventListener("click", () =>{
    
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    bmi = weight / (height * height)
    bmi = bmi.toFixed(2);

    if(bmi < 18.5){
        result.innerText = `BMI: ${bmi} - Underweight`;
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        result.innerText = `BMI: ${bmi} - Underweight`;
    }
    else if(bmi >= 25.0 && bmi <= 29.9){
        result.innerText = `BMI: ${bmi} - Underweight`;
    }
    else{
        result.innerText = "Invalid inputs";
    }
});




