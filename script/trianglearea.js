const sides = document.querySelectorAll(".side-input");
const checkTriangleBtn = document.querySelector("#check-triangle");

const outputArea = document.querySelector("#output-msg");

function multiplyOfSides(a, b) {
	const counter = a * b * 0.5;
	return counter;
}

function calculateArea() {
	const baseValue = Number(sides[0].value);
	const heightValue = Number(sides[1].value);

	if (baseValue > 0 && heightValue > 0) {
		const areaOfTriangle = multiplyOfSides(baseValue, heightValue);
		outputArea.innerText =
			"The Area of Triangle is : " + areaOfTriangle + " cm²";
	} else {
		outputArea.innerText = "Please, Enter valid inputs";
	}
}

checkTriangleBtn.addEventListener("click", calculateArea);
