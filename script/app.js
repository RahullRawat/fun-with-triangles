const angleOne = document.querySelector("#angle-1");
const angleTwo = document.querySelector("#angle-2");
const angleThree = document.querySelector("#angle-3");
const outputMsg = document.querySelector("#output-msg");

const checkBtn = document.querySelector("#btn-check");

checkBtn.addEventListener("click", isTriangle);

function isTriangle() {
	const sum =
		Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value);

	if (
		angleOne.value === "" ||
		angleTwo.value === "" ||
		angleThree.value === ""
	) {
		outputMsg.innerText = "Please fill all the fields";
	} else if (angleOne.value < 1 || angleTwo.value < 1 || angleThree.value < 1) {
		outputMsg.innerText = "Angle should be greater than 0";
	} else {
		if (sum === 180) {
			outputMsg.innerText = "Yes, the angles form a triangle";
		} else {
			outputMsg.innerText = "That doesn't form a triangle";
		}
	}
}
