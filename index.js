function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (height === "" || weight === "") {
        return "Введіть вагу та зріст.";
    }

    if (height < 139.6 || height > 244 || weight < 25.3 || weight > 317.5) { 
        document.getElementById('result').innerText = "Введіть коректні дані";;
        return;
}

    let BMI = weight / Math.pow(height, 2) * 10000;
    let category = BMI < 18.5 ? "Недостатня вага"
        : BMI >= 18.5 && BMI <= 24.9 ? "Нормальна вага"
        : BMI >= 25 && BMI <= 29.9 ? "Надмірна вага"
        : BMI >= 30 && BMI <= 34.9 ? "Ожиріння 1 ступеня"
        : BMI >= 35 && BMI <= 39.9 ? "Ожиріння 2 ступеня"
        : BMI >= 40 && BMI <= 49.9 ? "Ожиріння 3 ступеня" : "Ожиріння 4 ступеня";

    document.getElementById('result').innerHTML = `ІМТ: ${BMI.toFixed(2)}<br> ${category}`;

    document.querySelector('#weight').addEventListener('input', function(e) {
        this.value = this.value.replace(/[^\d.]/g, '');
    });

    document.querySelector('#height').addEventListener('input', function(e) {
        this.value = this.value.replace(/[^\d.]/g, '');
    });
}


