let navbar = document.querySelector(".navbar");
let navbarChange = document.querySelector("#navbarChange");
let line = document.querySelector(".line");

navbarChange.addEventListener("click", function () {
	console.dir(line);
	if (navbar.style.left !== "0px") {
		navbar.style.left = "0px";
		line.className = "lineChange";
	} else {
		navbar.style.left = "-50vw";
		line.className = "line";
	}
});

let h3List = document.getElementsByTagName("h3");
let qaList = document.querySelectorAll(".qa");

for (let i = 0; i < h3List.length; i++) {
	h3List[i].addEventListener("click", function () {
		if (qaList[i].className == "qa") {
			qaList[i].className = "show";
		} else {
			qaList[i].className = "qa";
		}
	});
}

let submit = document.querySelector("#submit");
let resetForm = document.querySelector("#resetForm");
let input = document.getElementsByTagName("input");
let textarea = document.getElementsByTagName("textarea");

submit.addEventListener("click", function () {
	let allFilled = true;

	for (let i = 0; i < input.length; i++) {
		if (input[i].value === "") {
			allFilled = false;
			break;
		}
	}

	if (textarea.value === "") {
		allFilled = false;
	}

	if (allFilled) {
		window.alert("表單送出成功");
		document.getElementById("form").reset();
	} else {
		window.alert("請填寫所有欄位");
	}
});

resetForm.addEventListener("click", function () {
	document.getElementById("form").reset();
});
