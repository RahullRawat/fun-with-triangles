const quizForm = document.querySelector(".quiz-form");
const submitAnswer = document.querySelector("#submit-answer");
const outputScore = document.querySelector("#output-msg");

const correctAnswers = [
	"90°",
	"right angled",
	"Isosceles Triangle",
	"Acute Triangle",
	"Obtuse Triangle",
	"180",
];

function calculateScore() {
	let score = 0;
	let index = 0;

	const formResults = new FormData(quizForm);
	for (let value of formResults.values()) {
		if (value === correctAnswers[index]) {
			score = score + 1;
		}
		index = index + 1;
	}
	outputScore.innerText = "Your score is " + score;
}

submitAnswer.addEventListener("click", calculateScore);

// function calculateArea(side1, side2) {
// 	const counter = 0.5 * side1 * side2;
// 	return counter;
// }

// function calculateAreaOfTriangle() {
// 	const a = Number(sides[0].value);
// 	const b = Number(sides[1].value);
// 	if (a > 0 && b > 0) {
// 		const areaOfTriangle = calculateArea(a, b);
// 		outputArea.innerText =
// 			"The area of triangle is : " + areaOfTriangle + " cm²";
// 	} else {
// 		outputArea.innerText = "Please, Enter valid inputs";
// 	}
// }

// checkTriangleBtn.addEventListener("click", calculateAreaOfTriangle);
