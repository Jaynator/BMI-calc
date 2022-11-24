window.onload = () => {
	let button = document.querySelector("#btn");
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	let height = parseInt(document
			.querySelector("#height").value);
	let weight = parseInt(document
			.querySelector("#weight").value);
	let result = document.querySelector("#result");

	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";
	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";
	else {
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		if (bmi < 19) result.innerHTML =
			`Under Weight : <span>${bmi}</span>`;
		else if (bmi >= 19 && bmi < 23.9)
			result.innerHTML =
			`Normal Weight: <span>${bmi}</span>`;
		else if (bmi >= 24 && bmi < 28.9) 
			result.innerHTML =
			`Over Weight : <span>${bmi}</span>`;
		else if (bmi >= 29 && bmi < 39) 
			result.innerHTML =
			`Obesity : <span>${bmi}</span>`;
		else 
			result.innerHTML =
			`Strong Obesity : <span>${bmi}</span>`;
	}
}
