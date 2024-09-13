// Akses elemen DOM
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const ageInput = document.getElementById('age');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const bmiResult = document.getElementById('result-bmi');
const weightError = document.getElementById('weight_error');
const heightError = document.getElementById('height_error');
const ageError = document.getElementById('age_error');
const btn = document.getElementById('btn');

// Fungsi untuk menghitung BMI
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert height from cm to meters
    const age = parseInt(ageInput.value);

    // Ambil jenis kelamin yang dipilih
    let gender;
    for (const input of genderInputs) {
        if (input.checked) {
            gender = input.value;
            break;
        }
    }

    // Validasi input
    if (isNaN(weight) || weight <= 0) {
        weightError.textContent = 'Berat badan harus berupa angka positif.';
        return;
    } else {
        weightError.textContent = '';
    }

    if (isNaN(height) || height <= 0) {
        heightError.textContent = 'Tinggi badan harus berupa angka positif.';
        return;
    } else {
        heightError.textContent = '';
    }

    if (isNaN(age) || age <= 0) {
        ageError.textContent = 'Umur harus berupa angka positif.';
        return;
    } else {
        ageError.textContent = '';
    }

    // Rumus BMI = berat (kg) / tinggi^2 (m^2)
    const bmi = weight / (height * height);
    let bmiCategory = '';

    // Klasifikasi BMI
    if (bmi < 18.5) {
        bmiCategory = 'Kurus';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = 'Kelebihan Berat Badan';
    } else {
        bmiCategory = 'Obesitas';
    }

    // Tampilkan hasil BMI
    bmiResult.textContent = `Jenis Kelamin: ${gender}, Umur: ${age} tahun, BMI Anda: ${bmi.toFixed(1)} (${bmiCategory})`;
}

// Event listener untuk tombol "Hitung BMI"
btn.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah form submit
    calculateBMI();
});
