const sides = document.querySelectorAll(".side-input");
const checkHypotenuseBtn = document.querySelector("#check-hypotenuse");

const outputHypotenuse = document.querySelector("#output-msg");

function sumOfSides(a, b) {
	const counter = a * a + b * b;
	return counter;
}

function calculateHypotenuse() {
	const baseValue = Number(sides[0].value);
	const heightValue = Number(sides[1].value);

	if (baseValue > 0 && heightValue > 0) {
		const sqrtOfSides = sumOfSides(
			Number(sides[0].value),
			Number(sides[1].value)
		);
		const resultFinal = Math.sqrt(sqrtOfSides);
		outputHypotenuse.innerText = "The value of Hypotenuse is : " + resultFinal;
	} else {
		outputHypotenuse.innerText = "Please, Enter valid inputs";
	}
}

checkHypotenuseBtn.addEventListener("click", calculateHypotenuse);
